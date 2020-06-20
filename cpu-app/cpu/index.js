const appInsights = require('applicationinsights');
appInsights.setup().start();

module.exports = async function (context, mySbMsg) {
    const start = Date.parse(mySbMsg.date);
    if (!isNaN(start)) {
        appInsights.defaultClient.trackMetric({
            name: "cpuMsgAge",
            value: new Date().getTime() - new Date(start).getTime()
        });
    }

    const sec =  1;
    let count = 0;
    const startDate = Date.now();
    while (Date.now() - startDate <= sec * 1000) {
        count++;
    }
};