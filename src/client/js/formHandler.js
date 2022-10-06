/** Function to capture the first form submit - Name checker and local data request */
export function handleSubmit(event) {
    event.preventDefault();       
    const formText = document.getElementById('name').value;

    /** Function to verify the typed name and return a message */
    /** Test: mockCallAPI  */
    const resp = Client.checkForName(formText);   
    //console.log(resp);
    document.getElementById('results').innerHTML = resp;        

    /** Function to make an API request and return a message */
    /** Test: mockCallAPI  */
    Client.doGetMockRequest()
        .then(response => {
            console.log(response[0].title);
            // document.getElementById('results').innerHTML = response[0].title;
        })
        .catch(error => console.log(error));
}

/** Function to capture the second form submit - NLP - Text analyzer */
export function nlpText(event) {
    event.preventDefault();
    const textToAnalyze = document.getElementById('textToCheck').value;

    Client.nlpHandler(textToAnalyze)
        .then(response => {
            // console.log('==> nlpHandler ');
            console.log(`Remaining credits: ${response.status.remaining_credits}`);

            let polarity = "";

            switch (response.score_tag){
                case "P+":
                    polarity = "Strong Positive";
                break;
                case "P":
                    polarity = "Positive";
                break;
                case "NEU":
                    polarity = "Neutral";
                break;
                case "N":
                    polarity = "Negative";
                break;
                case "N+":
                    polarity = "Strong Negative";
                break;
                case "NONE":
                    polarity = "Without Polarity";
                break;
                default:
                    polarity = "No text to analyze."
            } 

            document.getElementById('resultsNLP').innerHTML = `<p>Your text: <span class='nlp-response'>"${response.sentence_list[0].segment_list[0].text}"</span></p>
                                                                <p>Polarity: <span class='nlp-response'>${polarity}</span></p>
                                                                <p>Subjectivity: <span class='nlp-response'>${response.subjectivity}</span></p>
                                                                <p>Confidence: <span class='nlp-response'>${response.sentence_list[0].confidence}</span></p>
                                                                <p>Irony: <span class='nlp-response'>${response.irony}</span></p>
                                                            `
        })
        .catch((error) => console.error(error));

}
