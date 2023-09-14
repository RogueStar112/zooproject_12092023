function AnimalQuiz() {
    
    let points = 0;

    let correct_messages = "";

    let question_1 = prompt("Peregrine Falcons are the fastest animals in the world. True/False")
    let question_2 = prompt("Elephants eat with their noses. True/False")
    let question_3 = prompt("Frogs need lots of water to stay hydrated. True/False")

    // using lowercase on all letters prevents case sensitvity
    if (question_1.toLowerCase() == "t" || question_1.toLowerCase() == "true") {
       
        points += 1;

        correct_messages += "You got question 1 correct.\n "

    } else {
        correct_messages += "Question 1 incorrect.\n"
    }

    if (question_2.toLowerCase() == "t" || question_1.toLowerCase() == "true") {

        points += 1;
        
        correct_messages += "Question 2 correct\n"
    } else {
        correct_messages += "Question 2 incorrect\n"
    }

    if (question_3.toLowerCase() == "f" || question_1.toLowerCase() == "false") {

        points += 1;

        correct_messages += "Question 3 correct\n"


    } else {
        correct_messages += "Question 3 incorrect\n"
    }

    alert(`You got ${points}/3 correct! 
    ${correct_messages}`)
    
}

function changeBgColor() {
    
}