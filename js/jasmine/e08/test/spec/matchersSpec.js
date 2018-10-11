describe('Matchers List - Jasmine', function () {

  describe('Generic Matchers', function () {
    it('nothing() Matcher', function () {
      expect().nothing();
    });
  });

  describe('Equality Matchers', function () {
    it('toBe() Matcher', function () {
      expect(!true).toBe(false);

      var array1 = [1, 2, 3];
      var array2 = array1;
      var array3 = [1, 2, 3];
      expect(array2).toBe(array1);
      expect(array3).not.toBe(array1);
    });

    it('toEqual() Matcher', function () {
      expect([1, 2, 3]).not.toEqual(['1', '2', '3']);
      expect([1, 2, 3]).toEqual([1, 2, 3]);

      var array1 = [1, 2, 3];
      var array2 = array1;
      var array3 = [1, 2, 3];
      expect(array2).toEqual(array1);
      expect(array3).toEqual(array1);
    });

    it('toBeCloseTo() Matcher', function () {
      expect(2/3).toBeCloseTo(0.3, 0);
      expect(1/3).toBeCloseTo(0.331111, 2);
      expect(1/3).not.toBeCloseTo(0.3, 2);
      expect(1/3).toBeCloseTo(0.332); // Default presition digits is 2
    });

    it('toContain() Matcher', function () {
      var array = [1, 2, 3, '4', '5'];
      expect(array).toContain(2);
      expect(array).not.toContain(4);
      var text = "Hola como estas?";
      expect(text).toContain("como");
      expect(text).not.toContain("Como");
    });

    it('toMatch() Matcher', function () {
      var regex = /[1-9]?[0-9](\.?[0-9]{3}){2}-[0-9kK]$/;
      expect('12.123.123-1').toMatch(regex);
      expect('12123123-1').toMatch(regex);
      expect('121231231').not.toMatch(regex);
    });
  });

  describe('Definition Matchers', function () {
    it('toBeDefined() Matcher', function () {
      expect(result).not.toBeDefined();
      var result = 1;
      expect(result).toBeDefined();
    });

    it('toBeUndefined() Matcher', function () {
      expect(result).toBeUndefined();
      var result = 1;
      expect(result).not.toBeUndefined();
    });

    it('toBeNaN() Matcher', function () {
      expect('a' * 2).toBeNaN();
      expect('10' * 2).not.toBeNaN();
    });

    it('toBeNull() Matcher', function () {
      var result;
      expect(result).not.toBeNull();
      result = null;
      expect(result).toBeNull();
      result = 0;
      expect(result).not.toBeNull();
    });
  });

  describe('Boolean Matchers', function () {
    it('toBeTruthy() Matcher', function () {
      expect(5 > 7).not.toBeTruthy();
      expect(!false).toBeTruthy();
    });

    it('toBeFalsy() Matcher', function () {
      expect(5 > 7).toBeFalsy();
      expect(!false).not.toBeFalsy();
    });
  });

  describe('Relational Matchers', function () {
    it('toBeGreaterThan() Matcher', function () {
      expect(7/3).toBeGreaterThan(2);
      expect(6/3).not.toBeGreaterThan(2);
      expect(5/3).not.toBeGreaterThan(2);
    });

    it('toBeGreaterThanOrEqual() Matcher', function () {
      expect(7/3).toBeGreaterThanOrEqual(2);
      expect(6/3).toBeGreaterThanOrEqual(2);
      expect(5/3).not.toBeGreaterThanOrEqual(2);
    });

    it('toBeLessThan() Matcher', function () {
      expect(7/3).not.toBeLessThan(2);
      expect(6/3).not.toBeLessThan(2);
      expect(5/3).toBeLessThan(2);
    });

    it('toBeLessThanOrEqual() Matcher', function () {
      expect(7/3).not.toBeLessThanOrEqual(2);
      expect(6/3).toBeLessThanOrEqual(2);
      expect(5/3).toBeLessThanOrEqual(2);
    });
  });

  describe('Arithmetic Matchers', function () {
    it('toBeNegativeInfinity() Matcher', function () {
      expect(-10 / 0).toBeNegativeInfinity();
      expect(10 / 0).not.toBeNegativeInfinity();
      expect(-10 / 0.01).not.toBeNegativeInfinity();
    });

    it('toBePositiveInfinity() Matcher', function () {
      expect(-10 / 0).not.toBePositiveInfinity();
      expect(10 / 0).toBePositiveInfinity();
      expect(10 / 0.01).not.toBePositiveInfinity();
    });
  });

});
