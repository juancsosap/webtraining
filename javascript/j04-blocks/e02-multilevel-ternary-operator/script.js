function main() {
  var question = "How old are you?";
  var answer = prompt(question);

  var valid = (answer !== null) && (answer != "") && !isNaN(answer);

  var age = valid ? Number(answer) : -1;

  var message = !valid ? "Invalid Information"
                       : age < 2  ? "You are a Baby"
                       : age < 12 ? "You are a Child"
                       : age < 18 ? "You are a Teen"
                       : age < 60 ? "You are an Adult"
                                  : "You are an Adult Major";

  alert(message);
}

main();
