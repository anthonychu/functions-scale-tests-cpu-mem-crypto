const crypto = require("crypto");
const appInsights = require('applicationinsights');
appInsights.setup().start();

module.exports = async function (context, mySbMsg) {
    const start = Date.parse(mySbMsg.date);
    if (!isNaN(start)) {
        appInsights.defaultClient.trackMetric({
            name: "cryptoMsgAge",
            value: new Date().getTime() - new Date(start).getTime()
        });
    }

    var s = '';

    for (var i = 0; i < 100000; i++) {
        s += crypto
            .createHash("sha256")
            .update("Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!")
            .digest("hex");
    }
};