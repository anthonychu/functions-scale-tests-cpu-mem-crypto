const appInsights = require('applicationinsights');
appInsights.setup().start();

module.exports = async function (context, mySbMsg) {
    const start = Date.parse(mySbMsg.date);
    if (!isNaN(start)) {
        appInsights.defaultClient.trackMetric({
            name: "memMsgAge",
            value: new Date().getTime() - new Date(start).getTime()
        });
    }

    const mem = [];
    const million = 1000000;
    mem[Math.floor(parseInt(10000, 10) * million)] = 'A';
    mem.fill('B');
};