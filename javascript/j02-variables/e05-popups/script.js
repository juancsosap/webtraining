function main() {
  var question = "What is your name?";
  var answer = prompt(question);
  var notification = `Ẁelcome ${answer}`;
  alert(notification);
  var question = "Do you want to be my friend?";
  var answer = confirm(question);
  alert(`You say ${answer}...`);
}

main();
