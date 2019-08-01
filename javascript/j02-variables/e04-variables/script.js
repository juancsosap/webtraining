function main() {
  // Variable definition (optional)
  var v1 = "Hello";
  r1 = `name: v1 - value: ${v1} - type: ${typeof v1} <br/>`;
  document.write(r1);

  // Variable type could be changed in any moment
  v1 = 1234;
  r1 = `name: v1 - value: ${v1} - type: ${typeof v1} <br/>`;
  document.write(r1);

  // ------- Variables names --------

  // Case Sensitive
  var abc = 1;
  var ABC = '2';
  document.write(`name: abc - value: ${abc} - type: ${typeof abc} <br/>`);
  document.write(`name: ABC - value: ${ABC} - type: ${typeof ABC} <br/>`);

  // Could start and/or have with '_' or '$'
  var _a_b_c = 3;
  var $a$b$c = '4';
  document.write(`name: _a_b_c - value: ${_a_b_c} - type: ${typeof _a_b_c} <br/>`);
  document.write(`name: $a$b$c - value: ${$a$b$c} - type: ${typeof $a$b$c} <br/>`);

  // could not start with numbers but could have numbers
  //1abc = 5;
  var abc123 = 6;
  //document.write(`name: 1abc - value: ${1abc} - type: ${typeof 1abc} <br/>`);
  document.write(`name: abc123 - value: ${abc123} - type: ${typeof abc123} <br/>`);

  // Variable Name Convention
  var civilState = "Married";
  var civil_state = "Single";
  document.write(`name: civilState - value: ${civilState} - type: ${typeof civilState} <br/>`);
  document.write(`name: civil_state - value: ${civil_state} - type: ${typeof civil_state} <br/>`);

  // Undefine Variable
  var undef_var;
  document.write(`name: undef_var - value: ${undef_var} - type: ${typeof undef_var} <br/>`);
  // document.write(`name: undefVar - value: ${undefVar} - type: ${typeof undefVar} <br/>`);

  var undefVar1 = undefined;
  document.write(`name: undefVar1 - value: ${undefVar1} - type: ${typeof undefVar1} <br/>`);

  // Null Variable
  var null_var = null;
  document.write(`name: null_var - value: ${null_var} - type: ${typeof null_var} <br/>`);

}

main();
