module.exports = async function (context, mySbMsg) {
    const mem = [];
    const million = 1000000;
    mem[Math.floor(parseInt(10000, 10) * million)] = 'A';
    mem.fill('B');
};