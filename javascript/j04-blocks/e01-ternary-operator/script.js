function main() {
  var question = "What is your name?";
  var answer = prompt(question);

  var valid = (answer !== null) && (answer != "");

  var message = valid ? `Welcome ${answer}` : "Welcome as Gest";

  alert(message);
}

main();
