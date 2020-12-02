// function calcDroneMinEnergy(route) {
//     // your code goes here
//     let usage = 0
//     for (let i=1; i < route.length; i++) {
//       let distance = (
//           ((route[i][0]-route[i-1][0])**2) +
//           ((route[i][1]-route[i-1][1])**2) +
//           ((route[i][2]-route[i-1][2])**2)
//         )**0.5
//       usage = usage + ((route[i][2] <= route[i-1][2]) ? distance : 0-distance)
//     }
//     console.log((usage))
//   }

//My Good Solution
  function calcDroneMinEnergy(route) {
    // your code goes here
    let justZs = route.map(e => e[2])
    let maxHeight = Math.max(...justZs)
    return maxHeight-justZs[0]
  }
// Their elegant solution
//   function calcDroneMinEnergy(route) {
//    maxHeight = route[0][2]

//    for i from 1 to route.length-1:
//        if (route[i][2] > maxHeight):
//            maxHeight = route[i][2]

//    return maxHeight - route[0][2]
//   }

  calcDroneMinEnergy([ [0,   2, 10],
    [3,   5,  0],
    [9,  20,  6],
    [10, 12, 15],
    [10, 10,  8] ])

// I like my solution
    function findGrantsCap(grantsArray, newBudget) {
      // your code goes here
      grantsArray.sort((a,b) => a-b)
      let average
      for (let i=0; i< grantsArray.length; i++) {
        average = newBudget/(grantsArray.length-i)
        if (grantsArray[i] <= average) {
          newBudget-=grantsArray[i]
        }
        else {
          return average
        }
      }
    }

//Their sorta messy solution:

/*

function findGrantsCap(grantsArray, newBudget):
    n = grantsArray.length

    # sort the array in a descending order.
    grantsArray.sort(reverse=true)

    # pad the array with a zero at the end to
    # cover the case where 0 <= cap <= grantsArray[i]
    grantsArray.push(0)

    # calculate the total amount we need to
    # cut back to meet the reduced budget
    surplus = sum(grantsArray) - newBudget

    # if there is nothing to cut, simply return
    # the highest grant as the cap. Recall that
    # the grants array is sorted in a descending
    # order, so the highest grant is positioned
    # at index 0
    if (surplus <= 0):
        return grantsArray[0]

    # start subtracting from surplus the
    # differences (“deltas”) between consecutive
    # grants until surplus is less or equal to zero.
    # Basically, we are testing out, in order, each
    # of the grants as potential lower bound for
    # the cap. Once we find the first value that
    # brings us below zero we break
    for i from 0 to n-1:
        surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]):
        if (surplus <= 0):
            break

    # since grantsArray[i+1] is a lower bound
    # to our cap, i.e. grantsArray[i+1] <= cap,
    # we  need to add to grantsArray[i+1] the
    # difference: (-total / float(i+1), so the
    # returned value equals exactly to cap.
    return grantsArray[i+1] + (-surplus / float(i+1))

    */

    // Jewels and Stones

/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

in: j="" s=""
out: 
edge: j='' return 0, 
*/

var numJewelsInStones = function(J, S) {
  if (!J.length || !S.length ) return 0
  let set = new Set([])
  for (let i=0; i < J.length; i++){
    set.add(J[i])
  }
  let count=0
  for (let i=0; i < S.length; i++) {
    if (set.has(S[i])) count++
  }
  return count
};

// Jewels and Stones

/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

in: j="" s=""
out: 
edge: j='' return 0, 
*/

var numJewelsInStones = function(J, S) {
  if (!J.length || !S.length ) return 0
  let set = new Set([])
  for (let i=0; i < J.length; i++){
    set.add(J[i])
  }
  let count=0
  for (let i=0; i < S.length; i++) {
    if (set.has(S[i])) count++
  }
  return count
};

console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "ZZ"), 0);












































/*
function counterPartOf(paren) {
if (paren===')'){return '('}
if (paren===']'){return '['}
if (paren==='}'){return '{'}
}
*/


/*


function validParens(string) {

const hashmap = {

  '}': '{',
  ']': '[',
  ')': '('
};

if (string.length < 1) return true;
if (string.length % 2 === 1) return false;
let theStack = [];
const openParens="([{";
for (let i=0; i < string.length; i++) {
  if (openParens.includes(string[i])) {
    theStack.push(string[i])
  }
  else {
    if (theStack.pop()!== hashmap[string[i]]) return false;
  }
}
return theStack.length ? false : true;
}

console.log(validParens('()'), 'true');
console.log(validParens('()[]{}'), 'true');
console.log(validParens('(]'), 'false');
console.log(validParens('([)]'), 'false');
console.log(validParens('{[]}'), 'true');



*/

/*
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/*
input: string
output: boolean
edge-cases: empty string: true, odd-numbered string would be false

pseudo-code:
'()' stack = (

from i=0...string.length-1 {
if string[i] is one of (.[,{ {
  push string[i] to stack
}
else {
  if stack.pop()!== counterPartOf[string[i]] {return false}
}
return false
}

*/

console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "ZZ"), 0);

