testname = 'Null Array input addition'

// arrange
input = [0, 0];

// act
output = add(input);

// assert
test = (output == 0);
msg = (test ? 'OK' : 'ERROR') + ': ' + testname;
console.log(msg);

// -------------------------------------------

testname = 'Array input addition'

// arrange
input = [5, 4];

// act
output = add(input);

// assert
test = (output == 9);
msg = (test ? 'OK' : 'ERROR') + ': ' + testname;
console.log(msg);

// -------------------------------------------

testname = 'Long Array input addition'

// arrange
input = [5, 4, 3, 4];

// act
output = add(input);

// assert
test = (output == 16);
msg = (test ? 'OK' : 'ERROR') + ': ' + testname;
console.log(msg);
