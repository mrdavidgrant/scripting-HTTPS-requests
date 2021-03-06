function getAndPrintHTML (options, callback) {
  var https = require('https')
  var results = ""
  https.get(requestOptions, function(response){
    response.setEncoding = 'utf8'
    response.on('data', function(data) {
      results += data
    })
    response.on('end', function(data) {
      callback(results)
    })
  })
  return results
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML)