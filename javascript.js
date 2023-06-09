const current = document.querySelector('.currentEntry');
const equation = document.querySelector('.equation');


let operand1 = "";
let operand2 = "";
let operator = "";
let enteringNumber = false;

function processOperator (op) {
    switch (op) {
        case "plus":
            return "+";
            break;
        case "minus":
            return "-";
            break;
        case "multiply":
            return "x";
            break;
        case "divide":
            return "&#247";
            break;
    }
}

function evaluate () {
    switch (operator) {
        case "+":
            return Number(operand1) + Number(operand2);
            
        case "-":
            return Number(operand1) - Number(operand2);
            
        case "x":
            return Number(operand1) * Number(operand2);
            
        case "&#247":
            return Number(operand1) / Number(operand2);
            
    }
}

function zeroSnark () {
    if (current.textContent == "Infinity") {
        alert("Math.exe has stopped working. Please restart universe immediately.");
        operand1 = "";
        operand2 = "";
        operator = "";
        equation.innerHTML = "";
        current.textContent = "0";
    }
};

function round () {
    if ((current.textContent.length - current.textContent.search(/\./)) > 5) {
        current.textContent = `${current.textContent.slice(0, (current.textContent.search(/\./) + 6))}`;
    };
    };


document.querySelectorAll('.numButton').forEach(item => item.addEventListener('click', event => {
    if (!(current.textContent === 0 && event.target.innerHTML == 0)) {
        enteringNumber = true;
    if (operand2 === "" && operator === "") {
        operand1 += event.target.innerHTML.toString();
        current.textContent = `${operand1}`;
    } else if (operand1 !== "" && operator !== "") {
        operand2 += event.target.innerHTML.toString();
        current.textContent = `${operand2}`;
    };};

}));

document.querySelectorAll('.operatorButton').forEach(item => item.addEventListener('click', event => {
    
    if (operand1 !== "" && operator === "" && operand2 === "") {
        enteringNumber = false;
        operand1 = current.textContent;
        operator = processOperator(event.target.id);
        equation.innerHTML = `${operand1} ${operator}`;
    } else if (operand1 !== "" && operator !== "" && operand2 !== "") {
        enteringNumber = false;
        operand2 = current.textContent;
        current.innerHTML = `${evaluate()}`;
        zeroSnark();
        round();
        operator = processOperator(event.target.id);
        equation.innerHTML += ` ${operand2} ${operator}`;
        operand1 = current.textContent;
        operand2 = "";
    };
}));

document.querySelector('#equals').addEventListener('click', event => {
    if (operand1 !== "" && operator !== "" && operand2 !== "") {
        enteringNumber = false;
        equation.innerHTML += ` ${current.textContent}`;
        current.textContent = `${evaluate()}`;
        zeroSnark();
        round();
        operand1 = current.textContent;
        operator = "";
        operand2 = "";
    };
});

document.querySelector('#clear').addEventListener('click', event => {
    operand1 = "";
    operand2 = "";
    operator = "";
    equation.innerHTML = "";
    current.textContent = "0";
    enteringNumber = false;
});

document.querySelector('#delete').addEventListener('click', event => {
    if (current.textContent == operand1) {
      let array = operand1.split("");
      array.pop();
      operand1 = array.join("");
      current.textContent = `${operand1}`;
    } else if (current.textContent == operand2) {
        let array = operand2.split("");
        array.pop();
        operand2 = array.join("");
        current.textContent = `${operand2}`;
      };
      if (current.textContent == "") {current.textContent = "0"};
});

document.querySelector('#point').addEventListener('click', event => {
    if (current.textContent.search(/\./) == -1 && enteringNumber == true) {
    if (current.textContent == operand1) {
      operand1 += ".";
      current.textContent = `${operand1}`;
    } else if (current.textContent == operand2) {
        operand2 += ".";
      current.textContent = `${operand2}`;
      };
    } else if (current.textContent == 0 && operand1 == 0) {
        operand1 = "0.";
        current.textContent = `${operand1}`;
        enteringNumber = true;
    };
});


document.querySelector('#negative').addEventListener('click', () => {

    if(enteringNumber) {

    if (current.textContent == operand1) {
        
        let array = operand1.split("");
        if (array[0] == "-") {
            array.shift();
        } else {
            array.unshift("-");
        };
        operand1 = array.join("");
        current.textContent = `${operand1}`;
    } else if (current.textContent == operand2) {
        let array = operand2.split("");
        if (array[0] == "-") {
            array.shift();
        } else {
            array.unshift("-");
        };
        operand2 = array.join("");
        current.textContent = `${operand2}`;
    };
};
}); 

window.addEventListener('keydown', keyboardEntry);

function keyboardEntry (event) {
    if (Number.isInteger(Number(event.key))) {
        if (!(current.textContent === 0 && event.key == 0)) {
            enteringNumber = true;
        if (operand2 === "" && operator === "") {
            operand1 += event.key;
            current.textContent = `${operand1}`;
        } else if (operand1 !== "" && operator !== "") {
            operand2 += event.key;
            current.textContent = `${operand2}`;
        };};
    } else if (event.key == "+" || event.key == "-") {
        
        if (operand1 !== "" && operator === "" && operand2 === "") {
            enteringNumber = false;
            operand1 = current.textContent;
            operator = event.key;
            equation.innerHTML = `${operand1} ${operator}`;
        } else if (operand1 !== "" && operator !== "" && operand2 !== "") {
            enteringNumber = false;
            operand2 = current.textContent;
            current.innerHTML = `${evaluate()}`;
            zeroSnark();
            round();
            operator = event.key;
            equation.innerHTML += ` ${operand2} ${operator}`;
            operand1 = current.textContent;
            operand2 = "";
        };

    } else if (event.key == "/") {
        if (operand1 !== "" && operator === "" && operand2 === "") {
            enteringNumber = false;
            operand1 = current.textContent;
            operator = "&#247";
            equation.innerHTML = `${operand1} ${operator}`;
        } else if (operand1 !== "" && operator !== "" && operand2 !== "") {
            enteringNumber = false;
            operand2 = current.textContent;
            current.innerHTML = `${evaluate()}`;
            zeroSnark();
            round();
            operator = "&#247";
            equation.innerHTML += ` ${operand2} ${operator}`;
            operand1 = current.textContent;
            operand2 = "";
        };
    
} else if (event.key == "*") {
    if (operand1 !== "" && operator === "" && operand2 === "") {
        enteringNumber = false;
        operand1 = current.textContent;
        operator = "x";
        equation.innerHTML = `${operand1} ${operator}`;
    } else if (operand1 !== "" && operator !== "" && operand2 !== "") {
        enteringNumber = false;
        operand2 = current.textContent;
        current.innerHTML = `${evaluate()}`;
        zeroSnark();
        round();
        operator = "x";
        equation.innerHTML += ` ${operand2} ${operator}`;
        operand1 = current.textContent;
        operand2 = "";
    };
} else if (event.key == "=") {
        if (operand1 !== "" && operator !== "" && operand2 !== "") {
            enteringNumber = false;
            equation.innerHTML += ` ${current.textContent}`;
            current.textContent = `${evaluate()}`;
            zeroSnark();
            round();
            operand1 = current.textContent;
            operator = "";
            operand2 = "";
        };
    } else if (event.key == "Backspace") {
        if (current.textContent == operand1) {
            let array = operand1.split("");
            array.pop();
            operand1 = array.join("");
            current.textContent = `${operand1}`;
          } else if (current.textContent == operand2) {
              let array = operand2.split("");
              array.pop();
              operand2 = array.join("");
              current.textContent = `${operand2}`;
            };
            if (current.textContent == "") {current.textContent = "0"};
    } else if (event.key == "Delete" || event.key == "Escape") {
        enteringNumber = false;
        operand1 = "";
        operand2 = "";
        operator = "";
        equation.innerHTML = "";
        current.textContent = "0";
    } else if (event.key == ".") {
        if (current.textContent.search(/\./) == -1 && enteringNumber == true) {
            if (current.textContent == operand1) {
              operand1 += ".";
              current.textContent = `${operand1}`;
            } else if (current.textContent == operand2) {
                operand2 += ".";
              current.textContent = `${operand2}`;
              };
            } else if (current.textContent == 0 && operand1 == 0) {
                operand1 = "0.";
                current.textContent = `${operand1}`;
                enteringNumber = true;
            };
    };
};