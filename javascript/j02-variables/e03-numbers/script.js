function main() {
  document.write(`100 is ${typeof 100} <br/>`);
  document.write(`-100 is ${typeof -100} <br/>`);
  document.write(`100.100 is ${typeof 100.100} <br/>`);
  document.write(`100.100e+10 is ${typeof 100.100e+10} <br/>`);
  document.write(`1e-100 is ${typeof 1e-100} <br/>`);
  document.write(`"100" is ${typeof "100"} <br/>`);
  document.write(`Number("100") is ${typeof Number("100")} <br/>`);
  document.write(`isNaN("100") is ${isNaN("100")} <br/>`);
  document.write(`isNaN("100abc") is ${isNaN("100abc")} <br/>`);
}

main();
