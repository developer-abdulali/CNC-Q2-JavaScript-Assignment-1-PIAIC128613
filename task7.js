var firstNumber = +prompt('Enter your first number.');
var secondNumber = +prompt('Enter your second number.');
var operation = prompt('Enter your operation','+ - * / %');

if(operation === '+'){
    document.write(firstNumber + secondNumber);
} else if(operation === '-'){
    document.write(firstNumber - secondNumber);
} else if(operation === '*'){
    document.write(firstNumber * secondNumber);
} else if(operation === '/'){
    document.write(firstNumber / secondNumber);
} else if(operation === '%'){
    document.write(firstNumber / secondNumber * 100 + '%');
}