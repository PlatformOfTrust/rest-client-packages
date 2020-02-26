const jsSHA = require("jssha");
const stringify = require('json-stable-stringify');


module.exports = function (context) {
    if (context.request.getUrl().endsWith("fetch-data-product")) {
        try {
            const signatureHeader = calculateHMAC(
                context.request.getBodyText(),
                context.request.getEnvironmentVariable('client_secret')
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
    var sha = new jsSHA("SHA-256", "TEXT");

    // calculated json payload should:
    // - contain no indents
    // - no spaces around property separator comma (,)
    // - and colon + space (: ) separator between key/values
    // - additionally sorted alphabetically by property keys
    const message = stringify(JSON.parse(bodyText)).replace(/":/g, '": ');

    sha.setHMACKey(client_secret, "TEXT");
    sha.update(message);
    return sha.getHMAC("B64");
}
