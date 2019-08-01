
var first = 0;
var second = 0;

console.log("%cArithmetic Operators", "color: blue");
console.log(`First number initialized with the value ${first}`);
console.log(`Second number initialized with the value ${first}`);

function inputFirst() {
  var question = "Enter the first number";
  first = Number(prompt(question));
  console.log(`First number loaded with the value ${first}`);
}

function inputSecond() {
  var question = "Enter the second number";
  second = Number(prompt(question));
  console.log(`Second number loaded with the value ${second}`);
}

function outputAdd() {
  var result = first + second;
  var message = `The addition result is ${result}`;
  alert(message);
}

function outputSub() {
  var result = first - second;
  var message = `The substraction result is ${result}`;
  alert(message);
}

function outputMul() {
  var result = first * second;
  var message = `The multiplication result is ${result}`;
  alert(message);
}

function outputDiv() {
  var result = first / second;
  var message = `The divition result is ${result}`;
  alert(message);
}

function outputMod() {
  var result = first % second;
  var message = `The modulus result is ${result}`;
  alert(message);
}

function loadResults() {
  console.log("--------------------");
  console.log(`${first} + ${second} => ${first + second}`);
  console.log(`${first} - ${second} => ${first - second}`);
  console.log(`${first} * ${second} => ${first * second}`);
  console.log(`${first} / ${second} => ${first / second}`);
  console.log(`${first} % ${second} => ${first % second}`);
  console.log(`${first} + ${second} - ${first} * ${second} / ${first} => ${first}`);
  console.log(`(${first} + (${second} - ${first}) * ${second}) / ${first} => ${(first + (second - first) * second) / first}`);
  console.log("--------------------");
}
