function main() {
  // Random Numbers
  document.write(`Random Number: ${Math.random()} <br/>`);
  document.write(`Random Number: ${Math.random()} <br/>`);

  var ini = 10;
  var end = 30; // Not inclusive

  var value1 = Math.random() * (end - ini) + ini;
  document.write(`Random Number: ${value1} <br/>`);

  var value2 = Math.random() * (end - ini) + ini;
  var integ2 = Math.floor(value2);
  document.write(`Random Number: ${value2} <br/>`);

}

main();
