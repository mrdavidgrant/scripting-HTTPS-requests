function getAndPrintHTML (options) {
  
  var https = require('https')
  var results = ""
  https.get(requestOptions, function(response){
    response.setEncoding = 'utf8'
    response.on('data', function(data) {
      results += data
    })
    response.on('end', function(data) {
      console.log(results)
    })
  })
  return results
}
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions)