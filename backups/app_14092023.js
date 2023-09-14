function animalQuiz() {
    
    let points = 0;

    let correct_messages = "";

    let question_1 = prompt("Peregrine Falcons are the fastest animals in the world. True/False")
    let question_2 = prompt("Elephants eat with their noses. True/False")
    let question_3 = prompt("Frogs need to drink lots of water to stay hydrated. True/False")

    // using lowercase on all letters prevents case sensitvity
    if (question_1.toLowerCase() == "t" || question_1.toLowerCase() == "true") {
       
        points += 1;


    } else {


    }

    if (question_2.toLowerCase() == "t" || question_1.toLowerCase() == "true") {

        points += 1;
        
    } else {
    }

    if (question_3.toLowerCase() == "f" || question_1.toLowerCase() == "false") {

        points += 1;


    } else {

    }

    alert(`You got ${points}/3 correct!`)
    
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