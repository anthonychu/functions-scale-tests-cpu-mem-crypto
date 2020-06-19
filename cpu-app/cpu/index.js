module.exports = async function(context, mySbMsg) {
    const sec =  1;
    let count = 0;
    const startDate = Date.now();
    while (Date.now() - startDate <= sec * 1000) {
        count++;
    }
    if (context) {
      context.res.status(200).send('result: ' + count);
    }
};