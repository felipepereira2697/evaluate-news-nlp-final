import { checkInput } from './inputChecker';

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    const validInput = checkInput(formText);

    if(validInput) {
        
        fetch('http://localhost:8080/analysis', {
            method: 'POST',
            body: JSON.stringify({name: formText}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
        .then(response => response.json()) 
        .then(json => {
            document.getElementById('results').innerHTML = `
                <div>Agreement: ${json.agreement}</div>
                <div>Score Tag: ${json.score_tag}</div>
                <div>Irony: ${json.irony}</div>
                <div>Text snippet: ${json.text}</div>
                <div>Confidence: ${json.confidence}</div>`;
            console.log(json);
        });
    } else {
        console.log('Form not submitted because it is not a valid url');
    }
    
}

export { handleSubmit }
