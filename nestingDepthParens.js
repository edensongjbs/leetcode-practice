/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max=0, currentNestLevel=0
    for (let i=0; i<s.length; i++) {
        if (s[i]==='(') {
            currentNestLevel++
            max = Math.max(max, currentNestLevel)
        }
        else if (s[i]===')') {
            currentNestLevel--
        }
    }
      return max
  };