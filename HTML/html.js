function getAndPrintHTML () {
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
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

getAndPrintHTML()