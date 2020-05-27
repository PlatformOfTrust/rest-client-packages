const jsSHA = require('jssha');
const stringify = require('json-stable-stringify');

module.exports = function(context) {
    if (context.request.getUrl().endsWith('fetch-data-product')) {
        try {
            const signatureHeader = calculateHMAC(
                context.request.getBodyText(),
                context.request.getEnvironmentVariable('client_secret'),
            );

            context.request.setHeader('x-pot-signature', signatureHeader);
        } catch (err) {
            alert(err.message);
        }
    }
};

// /**
//  * Creates a Broker API compliant X-Pot-Signature header (The signature is created from the request payload and the app's client secret)
//  *
//  * @param {String} bodyText /broker/v1/fetch-data-product body
//  * @param {String} client_secret apps's client secret
//  */
function calculateHMAC(bodyText, client_secret) {
    var sha = new jsSHA('SHA-256', 'TEXT');

    // calculated json payload should:
    // - contain no indents
    // - no spaces around property separator comma (,)
    // - and colon + space (: ) separator between key/values
    // - additionally sorted alphabetically by property keys
    const message = jsonEncode(stringify(JSON.parse(bodyText)));

    console.log(message);

    sha.setHMACKey(client_secret, 'TEXT');
    sha.update(message);
    return sha.getHMAC('B64');
}

// Adds spaces after the value declarations into the payload and escapes non ASCII charracters
function jsonEncode(json) {
    let res = '';
    let isEscaped = false;
    let isValue = false;

    for (let i = 0; i < json.length; i++) {
        let b = json[i];

        // Escape non ASCII characters
        const charCode = b.charCodeAt(0);
        if (charCode > 127) {
            b = unicodeCharEscape(charCode);
        }

        res = res + b;

        // specify the start of the json value
        if (!isEscaped && b === '"') {
            isValue = !isValue;
        }
        // specify if the value separator is outside of a value declaration
        if (b === ':' && !isValue) {
            res = res + ' ';
        }

        // mark the next charracter as escaped if theres a leading backward
        // slash and it's not escaped
        if (b === '\\' && !isEscaped) {
            isEscaped = true;
            continue;
        }
        // if the charracter was escaped turn of escaping for the next one
        if (isEscaped) {
            isEscaped = false;
        }
    }

    return res;
}

function padWithLeadingZeros(string) {
    return new Array(5 - string.length).join('0') + string;
}

function unicodeCharEscape(charCode) {
    return '\\u' + padWithLeadingZeros(charCode.toString(16));
}
