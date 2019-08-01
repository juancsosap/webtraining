function main() {
  // Creation Arrays
  document.write("<hr/> <strong>Creating Arrays</strong> <br/>")

  var a1 = [1, 2, 3, 4];
  var t1 = typeof a1;
  document.write(`Array 1 : ${a1} => type: ${t1} <br/>`);
  console.log(a1);

  var a2 = new Array(1, 2, 3, 4);
  var t2 = typeof a2;
  document.write(`Array 2 : ${a2} => type: ${t2} <br/>`);
  console.log(a2);

  // Data within the Arrays
  document.write("<hr/> <strong>Data within the Arrays</strong> <br/>")
  var a3 = [];
  document.write(`Array 3 : ${a3} <br/>`);
  var a4 = [1, 2, 3, 4];
  document.write(`Array 4 : ${a4} <br/>`);
  var a5 = [true, false, true, true];
  document.write(`Array 5 : ${a5} <br/>`);
  var a6 = ["Lunes", "Miercoles", "Viernes"];
  document.write(`Array 6 : ${a6} <br/>`);
  var a7 = ["Juan", 36, true, a6];
  document.write(`Array 7 : ${a7} <br/>`);
  console.log(a7);

  // Accessing Data within the Arrays
  document.write("<hr/> <strong>Accessing Data within the Arrays</strong> <br/>")
  document.write(`First Element within the Array 7 : ${a7[0]} <br/>`);
  document.write(`Last Element within the Array 7 : ${a7[3]} <br/>`);
  a7[5] = "Chile";
  document.write(`Fifth Element within the Array 7 : ${a7[4]} <br/>`);
  console.log(a7);

  // Arrays Properties
  document.write("<hr/> <strong>Arrays Properties</strong> <br/>")
  document.write(`Array 7 : ${a7} => length: ${a7.length} <br/>`);
  document.write(`Last Element within the Array 7 : ${a7[a7.length - 1]} <br/>`);
  a7[a7.length] = "new last";
  document.write(`Last Element within the Array 7 : ${a7[a7.length - 1]} <br/>`);
  a7.push("other element");
  document.write(`Last Element within the Array 7 : ${a7[a7.length - 1]} <br/>`);
  a7.pop();
  document.write(`Last Element within the Array 7 : ${a7[a7.length - 1]} <br/>`);
  document.write(`First Element within the Array 7 : ${a7[0]} <br/>`);
  a7.shift();
  document.write(`First Element within the Array 7 : ${a7[0]} <br/>`);
  document.write(`Is the Fourth Element of the Array 7 an Array? ${Array.isArray(a7[3])} <br/>`);
  document.write(`Is the First Element of the Array 7 an Array? ${Array.isArray(a7[0])} <br/>`);


  document.write(`Is "Lunes" in the Last Element within the Array 7? : ${"Lunes" in a7[3]} <br/>`);
  document.write(`Is Array 1 equal to Array 2? ${a1 == a2} <br/>`)

  document.write(`<hr/>`)

}

main();
