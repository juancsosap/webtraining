describe('Custom Matchers', function () {

  beforeAll(function () {
    jasmine.addMatchers(customMatchers);
  });

  it('toBeEven() Matcher', function () {
    expect(12).toBeEven();
    expect(13).not.toBeEven();
  });

  it('toBeMultiple() Matcher', function () {
    expect(12).toBeMultiple();
    expect(12).toBeMultiple(3);
    expect(12).not.toBeMultiple(5);
  });

  it('toBeCloseEnough() Matcher', function () {
    expect(123).toBeCloseEnough(123);
    expect(123).not.toBeCloseEnough(125);
    expect(123).toBeCloseEnough(100, 25);
    expect(123).not.toBeCloseEnough(100, 20);
  });

  it('toBeBeetwen() Matcher', function () {
    expect(12).toBeBeetwen();
    expect(110).not.toBeBeetwen();
    expect(80).toBeBeetwen(70);
    expect(110).not.toBeBeetwen(70);
    expect(120).toBeBeetwen(100, 200);
    expect(12).not.toBeBeetwen(15, 20);
    expect(12).not.toBeBeetwen(15, 20);
  });

});
