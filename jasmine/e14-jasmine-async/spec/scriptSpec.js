var add = require('../src/script');

describe('Array Addition', function () {

  it('Null Array input addition', function () {
    input = [0, 0]; // arrange
    output = add(input); // act
    expect(output).toBe(0); // assert
  });

  it('Array input addition', function () {
    input = [5, 4]; // arrange
    output = add(input); // act
    expect(output).toBe(9); // assert
  });

});
