import axios from "axios";

export function checkForName(inputText) {
    let outputText = "Name invalid or null!";

    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        outputText = "Enterprise: Welcome, Captain!"
        //document.getElementById('results').innerHTML = outputText;
    }

    return outputText;
}


 

