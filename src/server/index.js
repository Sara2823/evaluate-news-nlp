require('dotenv').config()
const fetch = require("node-fetch");
const basURL = 'https://api.meaningcloud.com/sentiment-2.1';
const api = process.env.API_KEY;

const mockAPIResponse = require('./mockAPI.js')


const PORT = 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
const { response } = require('express');
app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
    
});

results = {}

app.post('/add',(req, res) => {
    getData(req.body.text)
    .then((data)=>{
        results.agreement = data.agreement;
        results.subjectivity=data.subjectivity;
        results.confidence=data.confidence;
        results.irony=data.irony;
        console.log("app.post======>"+JSON.stringify(results));
        res.json(results);
    })
    
}
)


const getData = async (url)=>{
  //wait to get data from the server
    const res = await fetch (`${basURL}?key=${api}&url=${url}&lang=en`);
    const data = await res.json();
    return data;

};
