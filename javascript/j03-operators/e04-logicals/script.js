function main() {
  document.write("<hr/> <strong>AND Logical Operators</strong> (&&) <br/>")
  document.write(`${false} AND ${false} => ${false && false} <br/>`);
  document.write(`${false} AND ${true} => ${false && true} <br/>`);
  document.write(`${true} AND ${false} => ${true  && false} <br/>`);
  document.write(`${true} AND ${true} => ${true  && true} <br/>`);

  document.write("<hr/> <strong>OR Logical Operators</strong> (||) <br/>")
  document.write(`${false} OR  ${false} => ${false || false} <br/>`);
  document.write(`${false} OR  ${true} => ${false || true} <br/>`);
  document.write(`${true} OR  ${false} => ${true  || false} <br/>`);
  document.write(`${true} OR  ${true} => ${true  || true} <br/>`);

  document.write("<hr/> <strong>NOT Logical Operators</strong> (!) <br/>")
  document.write(`NOT ${false} => ${!false} <br/>`);
  document.write(`NOT ${true} => ${!true} <br/>`);

  document.write("<hr/> <strong>Operators Prelation</strong> <br/>")
  document.write(`true || !false && true => true || (!false && true) => ${true || !false && true} <br/>`);
  document.write(`(true || !false) && true => ${(true || !false) && true} <br/>`);

  document.write("<hr/>");
}

main();
