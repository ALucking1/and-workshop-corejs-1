//## EXERCISE
describe('About Functions', function() {
  it('should declare functions', function() {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it('should know internal variables override outer variables', function() {
    var message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = 'Inner';
      return message;
    }

    expect(getMessage()).toBe('Outer');
    expect(overrideMessage()).toBe('Inner');
    expect(message).toBe('Outer');
  });

  it('should have lexical scoping', function() {
    var variable = 'top-level';
    function parentfunction() {
      var variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe('local');
  });

  it('should use lexical scoping to synthesise functions', function() {
    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  // Example of closure:
  //  function convert(currency) {
  //    const rate = request('http://sercis', currency)
  //    return function(amount) {
  //      return amount * rate;
  //    }
  //  }
  //
  // const convertEuroFrom = convert('EUR')
  //
  //  convertEuroFrom(1000);

  it('should allow extra function arguments', function() {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg('first', 'second', 'third')).toBe('first');

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg('only give first arg')).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(', ');
    }

    expect(returnAllArgs('first', 'second', 'third')).toBe('first, second, third');
  });

  it('should pass functions as values', function() {
    var appendRules = function(name) {
      return name + ' rules!';
    };

    var appendDoubleRules = function(name) {
      return name + ' totally rules!';
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise('John')).toBe('John rules!');

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise('Mary')).toBe('Mary totally rules!');
  });

  it('should return a reversed string', () => {
    function reverse(str) {
      const splitString = str.split('');
      const reversedStrArray = splitString.reverse();
      const reversedString = reversedStrArray.join('');

      return reversedString;
    }

    expect(reverse('hello')).toEqual('olleh');
  });

  it('should return a human age in dog age (1 human year to 7 dog years', () => {
    function puppyCalculator(dogAge) {
      return Math.floor(dogAge / 7);
    }

    expect(puppyCalculator(35)).toBe(5);
    expect(puppyCalculator(6)).toBe(0);
    expect(puppyCalculator(89)).toBe(12);
  });

  it('should return a string with a defined suffix', () => {
    function addSuffix(suffix) {
      const newStr = function stringToAddTo(str) {
        return str + suffix;
      }
      return newStr;
    }

    expect(markTaskDone('task1')).toEqual('task1 done!');
    expect(markTaskDone('task2')).toEqual('task2 done!');
    expect(hemphasis('do it').toEqual('do it!'));
  });
});
