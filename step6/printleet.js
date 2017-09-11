var getHTML = require('../module/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printReverse (html) {

  /* Write your code here! */
  
    var cipher = html.replace(/a/gi, '4').replace(/er/gi, '0r')
    .replace(/you/gi, 'j00')
    .replace(/e/gi, '3')
    .replace(/o/gi, '0').replace(/l/gi, '1')
    .replace(/ck/gi, 'x')
    .replace(/s/gi, '5')
    .replace(/t/gi, '7')
    console.log(cipher);
  
}

getHTML(requestOptions, printReverse);