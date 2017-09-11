function getAndPrintHTMLChunks () {
  
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
    /* Add your code here */
    var https = require('https')
    var results = ""
    https.get(requestOptions, function(response){
      response.setEncoding = 'utf8'
      response.on('data', function(data) {
        console.log(data.toString())
      })
    })
  }

  getAndPrintHTMLChunks()