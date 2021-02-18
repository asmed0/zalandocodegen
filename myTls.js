const initMyTls = require('mytls');
var myTls;

(async () => {
    myTls = await initMyTls()
    .then(console.log('myTls initated'));
})();

module.exports = myTls;
