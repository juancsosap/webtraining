function main() {

  document.write("<hr/> <strong>Relational Operators</strong> <br/>")
  document.write(`70 > 13 => ${70 > 13} <br/>`);
  document.write(`70 >= 13 => ${70 >= 13} <br/>`);
  document.write(`70 < 13 => ${70 < 13} <br/>`);
  document.write(`70 <= 13 => ${70 <= 13} <br/>`);
  document.write(`70 == 13 => ${70 == 13} <br/>`);
  document.write(`70 != 13 => ${70 != 13} <br/>`);
  document.write(`"abc" > "abe" => ${"abc" > "abe"} : based on ASCII values <br/>`);
  document.write(`"abc" > "ABC" => ${"abc" > "ABC"} : ASCII lowercases are greater than uppercases <br/>`);
  document.write(`"abc" > "123" => ${"abc" > "123"} : ASCII lowercases are greater than numbers <br/>`);
  document.write(`"abc" > "abcd" => ${"abc" > "abcd"} : longest is greater<br/>`);

  document.write("<hr/> <strong>Equality Operators</strong> <br/>")
  document.write(`"70" == 70 => ${"70" == 70} : Compare only values <br/>`);
  document.write(`"70" === 70 => ${"70" === 70} : Compare values and types <br/>`);
  document.write(`"70" != 70 => ${"70" != 70} : Compare only values <br/>`);
  document.write(`"70" !== 70 => ${"70" !== 70} : Compare values and types <br/>`);

  document.write("<hr/>");
}

main();
