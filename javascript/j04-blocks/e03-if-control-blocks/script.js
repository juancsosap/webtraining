function main() {
  var question = "How old are you?";
  var answer = prompt(question);

  var valid = (answer !== null) && (answer != "") && !isNaN(answer);

  if(!valid) {
    var message = "Invalid Information";
  } else {
    var age = Number(answer);
    var message = "You are ";
    if(age < 2) message += "a Baby";
    else if(age < 12) message += "a Child";
    else if(age < 18) message += "a Teen";
    else if(age < 60) message += "an Adult";
    else message += "an Adult Major";
  }

  alert(message);
}

main();
