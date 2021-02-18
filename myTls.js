const initMyTls = require('mytls');

(async () => {
    const myTls = await initMyTls()
    .then(console.log('myTls initated'));
})();

module.exports = myTls;