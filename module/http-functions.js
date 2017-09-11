module.exports = function getAndPrintHTML (options, callback) {
  var https = require('https')
  var results = ""
  https.get(options, function(response){
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
