module.exports = async function (context, req) {
    context.bindings.serviceBusMessage = {
        date: new Date()
    };
    context.res = {
        body: "pass"
    };
};