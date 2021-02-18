/* eslint-disable no-unused-vars */
var arrays = require("../src/datas")

module.exports = (req, res) => {
if(arrays[0].includes(req.body.apikey) && arrays[1].includes(req.body.catchall) && req.body.count <= 10){

  for(i=0; i<req.body.count; i++){
  const randomString = Math.random().toString(36).substring(7);
  const email = `${randomString}@${req.body.catchall}`

  var util = require('util');
  var exec = require('child_process').exec;

  var command = `curl --location --request POST 'https://www.zalando.se/api/graphql/' \
  --data-raw '[{"id":"62b3eec5fb79b0234e2f188e212a40f6c6854a65553a7791a976378380823d4f","variables":{"input":{"email":"${email}","preference":{"category":"MEN","topics":[{"id":"item_alerts","isEnabled":true},{"id":"survey","isEnabled":true},{"id":"offers_sales","isEnabled":true},{"id":"recommendations","isEnabled":true},{"id":"fashion_fix","isEnabled":true},{"id":"follow_brand","isEnabled":true},{"id":"subscription_confirmations","isEnabled":true}]},"referrer":"nl_subscription_banner_one_click","clientMutationId":"1613664615959"}}}]'`
  
  let child = exec(command, function(error, stdout, stderr){
  
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(error !== null)
    {
      console.log('exec error: ' + error);
    }
      });
    }
    res.status(200).json({"success":true})
  }else{

    res.status(200).json({"success":false, "cmd":command})
  }
}