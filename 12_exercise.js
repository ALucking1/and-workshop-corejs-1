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
    let hasOptions = data[currentPerson].options && data[currentPerson].options.length > 0; //has.options

    if (data[currentPerson].options) {
      for (var currentFilter = filters.length; currentFilter--; ) {
        // loop through filters
        var hasFilter = false;
        for (var currentOption = data[currentPerson].options.length; currentOption--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[currentFilter].indexOf(data[currentPerson].options[currentOption]) !== -1) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            data[currentPerson].options[currentOption] === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (freshGrad && data[currentPerson].options[currentOption] === 'FRESH_GRAD') {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      output.unshift(data[currentPerson]);
    }
  }
return output;
}

module.exports = filter;
