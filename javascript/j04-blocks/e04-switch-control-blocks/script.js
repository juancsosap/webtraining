function main() {
  var question1 = "First Number";
  var answer1 = prompt(question1);
  var valid1 = (answer1 !== null) && (answer1 != "") && !isNaN(answer1);
  if(valid1) {
    var n1 = Number(answer1);
  } else {
    alert("Invalid Input");
    return;
  }

  var question2 = "Second Number";
  var answer2 = prompt(question2);
  var valid2 = (answer2 !== null) && (answer2 != "") && !isNaN(answer2);
  if(valid2) {
    var n2 = Number(answer2);
  } else {
    alert("Invalid Input");
    return;
  }

  var options = "1.Addition\t\t2.Substraction\n3.Multiplication\t4.Divition";
  var question3 = `Choose Operation\n${options}`;
  var answer3 = prompt(question3);
  var valid3 = (answer3 !== null) && (answer3 != "") && !isNaN(answer3);
  if(valid3) {
    var option = Number(answer3);
  } else {
    alert("Invalid Input");
    return;
  }

  switch(option) {
    case 1:
      alert(`Addition Result is ${n1 + n2}`);
      break;
    case 2:
      alert(`Substraction Result is ${n1 - n2}`);
      break;
    case 3:
      alert(`Multiplication Result is ${n1 * n2}`);
      break;
    case 4:
      alert(`Division Result is ${n1 / n2}`);
      break;
    default:
      alert("Invalid Option");
  }

}

main();
