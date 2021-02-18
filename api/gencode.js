const express = require('express');
var axios = require('axios');
var setCookie = require('set-cookie-parser');
var myTls = require('../myTls')

module.exports = (req, res) => {
  const randomString = Math.random().toString(36).substring(7);
  const email = `${randomString}@${req.params.catchall}`

  var data = JSON.stringify([{"id":"62b3eec5fb79b0234e2f188e212a40f6c6854a65553a7791a976378380823d4f","variables":{"input":{"email":email,"preference":{"category":"MEN","topics":[{"id":"item_alerts","isEnabled":true},{"id":"survey","isEnabled":true},{"id":"offers_sales","isEnabled":true},{"id":"recommendations","isEnabled":true},{"id":"fashion_fix","isEnabled":true},{"id":"follow_brand","isEnabled":true},{"id":"subscription_confirmations","isEnabled":true}]},"referrer":"nl_subscription_banner_one_click","clientMutationId":"1613664615959"}}}]);
  let user = 'customer-FCSAPWBC-cc-se-sessid-9XZJORQ7'
  let pass = '5G7YFZ8OV'
  let host = 'pr.blankpremium.co.uk'
  let port = 7777

  var config = {
      method: 'get',
      url: 'https://www.zalando.se/man-home/',
      headers: { 
        'authority': 'www.zalando.se', 
        'pragma': 'no-cache', 
        'cache-control': 'no-cache', 
        'upgrade-insecure-requests': '1', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36', 
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'navigate', 
        'sec-fetch-user': '?1', 
        'sec-fetch-dest': 'document', 
        'accept-language': 'en-US,en;q=0.9,sv;q=0.8'
      }
    };

    axios(config)
    .then(async function (response) {
      var combinedCookieHeader = response.headers['set-cookie'];
      var splitCookieHeaders = setCookie.splitCookiesString(combinedCookieHeader)
      var cookies = setCookie.parse(splitCookieHeaders,{
          map: true
      });
      let frsx = cookies['frsx'].value;
      let clientId = cookies['Zalando-Client-Id'].value

  const putResponse = await myTls('https://www.zalando.se/api/graphql/', {
    body: data,
    headers: { 
      'x-xsrf-token': frsx,
      'content-type': 'application/json', 
      'accept': '/*', 
      'origin': 'https://www.zalando.se', 
      'sec-fetch-site': 'same-origin', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-dest': 'empty', 
      'referer': 'https://www.zalando.se/man-home/', 
      'accept-language': 'en-US,en;q=0.9,sv;q=0.8', 
      'cookie': `frsx=${frsx}; Zalando-Client-Id=${clientId};`
    },
    //ja3: '771,255-49195-49199-49196-49200-49171-49172-156-157-47-53,0-10-11-13,23-24,0',
    proxy: `http://${user}:${pass}@${host}:${port}`
  },'post')

      if(await putResponse.status !== 200){
          console.log(req.body)
          console.log(putResponse)
          res.status(400).json({success: false})
      }else{
          console.log(`Generated code for ${email}`)
          res.status(200).json({success: true, email: email})
      }
  })
  .catch(function (error) {
      console.log(error)
      res.status(500).json({success: false})
  }); 
}