var req = require("./node_modules/req/node_modules/request");
var data = '';
req
  .on('data', function(chunk) {
    data += chunk;
  })
  .on('end', function() {
    console.log('POST data: %s', data);
  })