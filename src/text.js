const request = require('node-fetch');
// const fetch = require('node-fetch');
 
const headers = {
  'Accept':'application/json'
 
};
 
request('https://api.carbonintensity.org.uk/intensity',
{
  method: 'GET',
 
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});