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

function candidateHasFilter(filter, candidate) {
  return candidate.options.includes(filter);
}

function filter(candidates, filters) {
  if (!filters.length) return candidates;

  const availableImmediately = filters.includes('AVAILABLE_IMMEDIATELY');
  const freshGrad = !availableImmediately && filters.includes('FRESH_GRAD');

  const filterCandidates = (candidate) => {
    if (candidate.options && candidate.options.length > 0) {
      if(availableImmediately && candidateHasFilter('AVAILABLE_IMMEDIATELY', candidate)) {
        return true;
      } else if (freshGrad && candidateHasFilter('FRESH_GRAD', candidate)) {
        return true;
      }

      return filters.every((filter) => candidateHasFilter(filter, candidate));
    }
  }

  return candidates.filter(filterCandidates);
}

module.exports = filter;
