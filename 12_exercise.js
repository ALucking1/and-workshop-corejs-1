/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(data, filters) {
  var output = [];
  var availableImmediately = false;
  var freshGrad = false;

  if (filters.length === 0) {
    return data;
  }

  if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
    availableImmediately = true;
  } else if (filters.indexOf('FRESH_GRAD') !== -1) {
    freshGrad = true;
  }


  for (var currentPerson = data.length; currentPerson--; ) {
    function currentPersonHasFilter(filter) {
      return data[currentPerson].options.indexOf(filter) !== -1;
    }
    if (data[currentPerson].options && data[currentPerson].options.length > 0) {

      if(availableImmediately && currentPersonHasFilter('AVAILABLE_IMMEDIATELY')) {
        output.unshift(data[currentPerson]);
      } else if (freshGrad && currentPersonHasFilter('FRESH_GRAD')) {
        output.unshift(data[currentPerson]);
      }

      else if (filters.every(currentPersonHasFilter)) {
        output.unshift(data[currentPerson]);
      }
    }
  }
  return output;
}

module.exports = filter;
