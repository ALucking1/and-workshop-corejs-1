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

function filter(candidates, filters) {
  var filteredCandidates = [];

  if (filters.length === 0) {
    return candidates;
  }

  let availableImmediately = filters.includes('AVAILABLE_IMMEDIATELY');
  let freshGrad = !availableImmediately && filters.includes('FRESH_GRAD');

  filterCandidates = function(candidate) {
    function currentCandidateHasFilter(filter) {
      return candidate.options.includes(filter);
    }
    if (candidate.options && candidate.options.length > 0) {

      if(availableImmediately && currentCandidateHasFilter('AVAILABLE_IMMEDIATELY')) {
        return true;
      } else if (freshGrad && currentCandidateHasFilter('FRESH_GRAD')) {
        return true;
      }

      else if (filters.every(currentCandidateHasFilter)) {
        return true;
      }
    }
  }

  filteredCandidates = candidates.filter(filterCandidates);

  return filteredCandidates;
}

module.exports = filter;
