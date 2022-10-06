//Requires
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const nlpResponseApi = require('./responseNLP.js');
const cors = require('cors');
const axios = require('axios');
const { request } = require('http');

require('dotenv').config();

//Server global variables
const port = 8081;
const app = express();

//Server setup 
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Server listening on port: ${port}`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

//API call
 app.get('/response-nlp', function (req, res) {
    
    // URL building
    const options = {
        method: 'GET',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        params: {
            txt: req.query.text,
            of: 'json',
            key: process.env.API_KEY,
            lang: 'en',
            ilang: 'en',
            txtf: 'plain'
        }
    }

    //console.log(options);

    axios.request(options).then((response) => {
        //console.log(request);
        //console.log(response.data);
        res.json(response.data);
    })
    .catch((error) => {
        console.log(error)
    })
}); 

app.get('/test-npl', function (req, res) {
    res.send(nlpResponseApi);
});


/** POST Request */
app.post('/postData', addPostData);

function addPostData(req, res){
    console.log(req.body);
    newEntry = {
        title: 'Title POST',
        message: 'Message POST',
        status: 'Status POST ok'
    }

    mockAPIResponse.push(newEntry);
    res.send(mockAPIResponse);
    //console.log(mockAPIResponse);
}
