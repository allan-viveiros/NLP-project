const axios = require('axios');

export async function nlpHandler(inputText) {

    // DEV - MODE >>> REMOVE THE URL TO PRODUCTION
    /* const options = {
        method: 'GET',
        url: '',
        params: {
            text: inputText
        }
    } */ 

    // PROD - MODE >> GET DATA FROM LOCALHOST
    const options = {
        method: 'GET',
        url: 'http://localhost:8081/response-nlp',
        params: {
            text: inputText
        }
    }

    const nlpChecker = await axios.request(options);
    // console.log(nlpChecker.data);

    return nlpChecker.data;   
}
