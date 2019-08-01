
var first = 0;
var second = 0;

console.log("%cAsignation Operators", "color: blue");
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

function add() {
  console.log("%cAddition operation called", "color: red");
  first += second;
  console.log(`First current value is ${first}`);
}

function sub() {
  console.log("%cSubstraction operation called", "color: red");
  first -= second;
  console.log(`First current value is ${first}`);
}

function mul() {
  console.log("%cMultiplication operation called", "color: red");
  first *= second;
  console.log(`First current value is ${first}`);
}

function div() {
  console.log("%cDivition operation called", "color: red");
  first /= second;
  console.log(`First current value is ${first}`);
}

function mod() {
  console.log("%cModulus operation called", "color: red");
  first %= second;
  console.log(`First current value is ${first}`);
}

function preinc() {
  console.log("%cPre-Increment operation called", "color: red");
  console.log(`First returned value is ${++first}`);
  console.log(`First current value is ${first}`);
}

function postinc() {
  console.log("%cPost-Increment operation called", "color: red");
  console.log(`First returned value is ${first++}`);
  console.log(`First current value is ${first}`);
}

function predec() {
  console.log("%cPre-Decrement operation called", "color: red");
  console.log(`First returned value is ${--first}`);
  console.log(`First current value is ${first}`);
}

function postdec() {
  console.log("%cPost-Decrement operation called", "color: red");
  console.log(`First returned value is ${first--}`);
  console.log(`First current value is ${first}`);
}
