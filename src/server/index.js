require('dotenv').config()

const aylien = require('aylien_textapi');
const myAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const PORT = 3000;
var path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});


// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
    
});

results = {}
app.post('/add', addData)
function addData(req,res) {

  console.log("mainPost===>" + req.body.text)

  myAPI.sentiment({ url: req.body.text}
  , function(error, response) {
      if (error === null) {
        results['polarity'] = response.polarity;
        results['subjectivity'] = response.subjectivity;
        response.send(results);
  }
  else {console.log("==========ERROR========\n:  "+error);
        console.log("==========response========\n:  "+res);}
  });

}

