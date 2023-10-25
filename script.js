// Get user inputs from buttons 




// User inputs 

let userInputs = [];


// Display 

let display = document.querySelector(".screen")
display.textContent = userInputs.join("")

// Edit display number 




// Take userInputs and choose correct equation 

operate(userInputs, operator)

function operate(userInputs, operator) {
    if (operator == "+") {
        add(userInputs)
    }
    else if (operator == "-") {
        subtract(userInputs)
    }
    else if (operator == "*") {
        multiply(userInputs)
    }
    else if (operator == "/") {
        divide(userInputs)
    }
}

// Addition function

function add(userInputs) {

    const sum = userInputs.reduce((total, item) => total + item); 

    console.log(sum); 
    return sum;
  }

// Subtraction function 

function subtract(userInputs) {

    const sum = userInputs.reduce((total, item) => total - item); 

    console.log(sum); 
    operate(userInputs, operator)
    return sum;
  }
// Multiplication function 

function multiply(userInputs) {

    const sum = userInputs.reduce((total, item) => total * item); 

    console.log(sum); 
    return sum;
  }
// Division function 

function divide(userInputs) {

    const sum = userInputs.reduce((total, item) => total / item); 

    console.log(sum); 
    return sum;
  }



