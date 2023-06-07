let operand1 = "";
let operand2 = "";
let operator = "";


document.querySelectorAll('.numButton').forEach(item => item.addEventListener('click', (event) => {
    if (operand1 !== "" && operator !== "") {
        operand2 += event.target.innerHTML.toString();
        display();
    } else {
        operand1 += event.target.innerHTML.toString();
        document.querySelector('.result').textContent ="";
        display();
    }
} ));

document.querySelectorAll('.opButton').forEach(item => item.addEventListener('click', (event) => {

    if (operand1 !== "" && operator === "" && operand2 === "") {
        operator = event.target.textContent;
        display();
    } else if (operand2 !== "") {
        result();
        operand1 = document.querySelector('.result').textContent;
        operator = event.target.textContent;
        display();
    } else if (operand1 === "" && operator === "" && operand2 === "" && document.querySelector('.result').textContent !== "") {
        operand1 = document.querySelector('.result').textContent;
        document.querySelector('.result').textContent = "";
        operator = event.target.textContent;
        display();
    }

}));

document.querySelector('.evalButton').addEventListener('click', () => {
    console.log(result());
});

document.querySelector('.clearButton').addEventListener('click', () => {
    operand1 = "";
    operand2 = "";
    operator = "";
    display();
    document.querySelector('.result').textContent = "";
});

document.querySelector('.deleteButton').addEventListener('click', () => {
    if (operand2 !== "") {
        let temp = operand2.split("");
        temp.pop();
        operand2 = temp.join("");
        display();
    } else if (operator !== "") {
        operator = "";
        display();
    } else if (operand1 !== "") {
        let temp = operand1.split("");
        temp.pop();
        operand1 = temp.join("");
        display();
    } else {
        return;
    }
});

function result () {
    if (operator === "+") {

        let tempresult = Number(operand1) + Number(operand2);
        document.querySelector('.result').textContent = tempresult;
        operand1 = "";
        operand2 = "";
        operator = "";
        display();
        return tempresult;

    } else if (operator === "-") {

        let tempresult = Number(operand1) - Number(operand2);
        document.querySelector('.result').textContent = tempresult;
        operand1 = "";
        operand2 = "";
        operator = "";
        display();
        return tempresult;

    } else if (operator === "*") {

        let tempresult = Number(operand1) * Number(operand2);
        document.querySelector('.result').textContent = tempresult;
        operand1 = "";
        operand2 = "";
        operator = "";
        display();
        return tempresult;

    } else if (operator === "/") {

        let tempresult = Number(operand1) / Number(operand2);
        document.querySelector('.result').textContent = tempresult;
        operand1 = "";
        operand2 = "";
        operator = "";
        display();
        return tempresult;

    }
};

function display () {document.querySelector('.equation').textContent = `${operand1} ${operator} ${operand2}`;};

/* 




document.querySelectorAll('.opButton').forEach(item => item.addEventListener('click', (event) => {
    if (operand1 !== "") {
        operator = event.target.innerHTML;
        display();
    };
}));


*/