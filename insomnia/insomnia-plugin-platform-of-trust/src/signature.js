module.exports = function (context) {

    if (context.request.getUrl().endsWith("fetch-data-product")) {
        alert("hey");
    }
};
