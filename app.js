function askQuestion(questiontxt, answer) {

    let userPrompt = prompt(`${questiontxt}`)

    // made user input and answer lower case to prevent case sensitivity.

    if (userPrompt.toLowerCase() == answer.toLowerCase()) {
        alert('correct!')
    } else {
        alert('incorrect!')
    }


}

function animalQuiz() {
    
    let points = 0;

    let correct_messages = ""; 

    let question_1 = askQuestion("Peregrine Falcons are the fastest animals in the world.", "true")
    let question_2 = askQuestion("Elephants eat with their mouths. True/False", "false")
    let question_3 = askQuestion("Frogs do not drink through their mouths. True/False", "true")

    

}



function changeBgColor() {
    
    
    let bgColorInput = prompt("What colour do you want the background to be?")

    document.body.style.backgroundColor = `${bgColorInput}`;


}

function addAnimalFact() {
    
    let userInput = prompt("Add your animal fact here.")

    let element = document.createElement('li');

    element.innerHTML = userInput;

    document.getElementById('animal-facts').appendChild(element);


}

/* source for facts: https://www.womansday.com/life/pet-care/a3900/animal-facts-for-kids-true-or-false-78075/
                    https://www.britannica.com/animal/peregrine-falcon

   changing bg colour: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
                    */ 