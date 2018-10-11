var test = function (testname, input) {
  return {
    toBe: function (expected) {
      error = (input != expected);
      msg = (error ? 'ERROR' : 'OK') + ': ' + testname;
      console.log(msg);
    }
  }
}

input = [0, 0]; // arrange
output = add(input); // act
test('Null Array input addition', output).toBe(0); // assert

// -------------------------------------------

input = [5, 4]; // arrange
output = add(input); // act
test('Array input addition', output).toBe(9); // assert

// -------------------------------------------

input = [5, 4, 3, 4]; // arrange
output = add(input); // act
test('Long Array input addition', output).toBe(16); // assert
