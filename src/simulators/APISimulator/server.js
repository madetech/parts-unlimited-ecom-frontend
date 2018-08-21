
const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(jsonParser)

app.post('/save-customer-details', (req, res) => {

  fs.writeFile('/tmp/customer-details.json', JSON.stringify(req.body), function (err) {
    if(err) throw err;
    fs.readFile('/tmp/responseFromCustomerDetails.json', 'utf8', function (err, data) {
      if(err) throw err;
      res.send(data)
    });
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
