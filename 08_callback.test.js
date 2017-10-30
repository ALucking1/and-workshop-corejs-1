describe('About Higher Order Functions', function() {
  it('should use filter to return array items that meet a criteria', function() {
    const numbers = [1, 2, 3];
    const odd = numbers.filter(function(x) {
      return x % 2 !== 0;
    });

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function() {
    const numbers = [1, 2, 3];
    const numbersPlus1 = numbers.map(function(x) {
      return x + 1;
    });

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function() {
    const numbers = [1, 2, 3];
    const reduction = numbers.reduce(function(memo, x) {
      return memo + x;
    }, 0);

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function() {
    const numbers = [1, 2, 3];
    const msg = '';
    const isEven = function(item) {
      msg += item % 2 === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(/* 🤔 */);
    expect(numbers).toEqual(/* 🤔 */);
  });

  it("should use 'all' to test whether all items pass condition", function() {
    //## FIND the write Array function to use on MDN
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.xxx(isEven)).toBe(/* 🤔 */);
    expect(mixedBag.xxx(isEven)).toBe(/* 🤔 */);
  });

  it("should use 'any' to test if any items passes condition", function() {
    //## FIND the write Array function to use on MDN
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.xxx(isEven)).toBe(/* 🤔 */);
    expect(mixedBag.xxx(isEven)).toBe(/* 🤔 */);
  });

  it('use multiple higher order functions', function() {
    const result = [0, 1, 2]
      .map(function(x) {
        return x + 1;
      })
      .reduce(function(sum, x) {
        return sum + x;
      });

    expect(result).toEqual(/* 🤔 */);
  });
});
