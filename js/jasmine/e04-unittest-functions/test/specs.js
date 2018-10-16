var test = function (testname, condition) {
  msg = (condition ? 'OK' : 'ERROR') + ': ' + testname;
  console.log(msg);
};

input = [0, 0]; // arrange
output = add(input); // act
test('Null Array input addition', output == 0); // assert

// -------------------------------------------

input = [5, 4]; // arrange
output = add(input); // act
test('Array input addition', output == 9); // assert

// -------------------------------------------

input = [5, 4, 3, 4]; // arrange
output = add(input); // act
test('Long Array input addition', output == 16); // assert
