var customMatchers = {};

customMatchers.toBeEven = function () {
  return {
    compare: function (actual) {
        var result = {};

        if(actual % 2 == 0) {
          result.pass = true;
          result.message = `Expected ${actual} to NOT be Even (be Odd)`;
        } else {
          result.pass = false;
          result.message = `Expected ${actual} to be Even (not be Odd)`;
        }

        return result;
      }
    };
};

customMatchers.toBeMultiple = function () {
  var matcher = {};

  matcher.compare = function (actual, expected) {
    expected = (expected === undefined) ? 1 : expected;

    var result = {};

    if(actual % expected == 0) {
      result.pass = true;
      result.message = `Expected ${actual} to NOT be Multiple of ${expected}`;
    } else {
      result.pass = false;
      result.message = `Expected ${actual} to be Multiple of ${expected}`;
    }

    return result;
  };

  return matcher;
};

customMatchers.toBeCloseEnough = function () {
  var matcher = {};

  matcher.compare = function (actual, expectedValue, expectedDelta) {
    expectedValue = (expectedValue === undefined) ? 0 : expectedValue;
    expectedDelta = (expectedDelta === undefined) ? 0 : expectedDelta;

    var result = {};

    if(actual >= (expectedValue - expectedDelta) && actual <= (expectedValue + expectedDelta)) {
      result.pass = true;
      result.message = `Expected ${actual} to NOT be Close Enough to ${expectedValue} with ${expectedDelta} of delta`
    } else {
      result.pass = false;
      result.message = `Expected ${actual} to be Close Enough to ${expectedValue} with ${expectedDelta} of delta`;
    }

    return result;
  };

  return matcher;
};

customMatchers.toBeBeetwen = function () {
  var matcher = {};

  matcher.compare = function (actual, expectedMin, expectedMax) {
    expectedMin = (expectedMin === undefined) ? 0 : expectedMin;
    expectedMax = (expectedMax === undefined) ? 100 : expectedMax;

    var result = {};

    if(actual >= expectedMin && actual <= expectedMax) {
      result.pass = true;
      result.message = `Expected ${actual} to NOT be beetwen ${expectedMin} and ${expectedMax}`;
    } else {
      result.pass = false;
      result.message = `Expected ${actual} to be beetwen ${expectedMin} and ${expectedMax}`;
    }

    return result;
  };

  return matcher;
};
