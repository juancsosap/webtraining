function main() {
  document.write("Message with double cuotes <br/>");
  document.write('Message with single cuotes <br/>');
  document.write('Message with single and "double" cuotes <br/>');
  document.write("Message with double and 'single' cuotes <br/>");
  document.write('Message with \'many\' "cuotes" <br/>');
  document.write("Message with 'many' \"cuotes\" <br/>");
  document.write("Message with 'many' \"cuotes\" <br/>");
  document.write("Message with backslash \\files\\file.txt <br/>");
  document.write("Message with symbols \ua734 <br/>");
  document.write("Message " + "Concatenated <br/>");
  document.write(`Message with ${'"Internal"'} ${"'Values'"} and others values like ${123} and ${true}`)
  alert("Command symbols\nFirst Line\t\tMessage \nSecond Line\tMessage");
}

main();
