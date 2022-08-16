// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function times(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function saySomething(whatToSay) {
  window.alert(whatToSay);
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = prompt("The addition of your two numbers is" + add(number1, number2) + ". The subtraction of your two numbers is" + subtract(number1, number2) + ".")

window.alert(times(number1, number2));
window.alert(divide(number1, number2));


