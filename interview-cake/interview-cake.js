// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants")

function combineBlock(blockA, blockB) {
    startTime = Math.min(blockA.startTime, blockB.startTime)
    endTime = Math.max(blockA.endTime, blockB.endTime)
    return {startTime, endTime}
}

// function hiCal(meetings) {
//     let condensedMeetings = []
//     for (let i=0; i<meetings.length; i++) {
//         let condensedMeeting = meetings[i]
//         if (!meetings[i].done)
//         {
//             for (let j=i+1; j < meetings.length; j++) {
//                 console.log(j)
//                 if ((meetings[j].startTime >= condensedMeeting.startTime) &&
//                 (meetings[j].startTime <= condensedMeeting.endTime)) {
//                     if (meetings[j].endTime > condensedMeeting.endTime) {
//                         condensedMeeting.endTime = meetings[j].endTime
//                     }
//                     meetings[j].done=true
//                 }
//                 if ((meetings[j].endTime <= condensedMeeting.endTime) &&
//                 (meetings[j].endTime >= condensedMeeting.endTime)) {
//                     if (meetings[j].startTime < condensedMeeting.startTime) {
//                         condensedMeeting.startTime = meetings[j].startTime
//                     }
//                     meetings[j].done=true
//                 }
//             }
//             condensedMeetings.push(condensedMeeting)
//         }
//     }
//     return condensedMeetings
// }

function contained(meeting, time) {
    return (time >= meeting.startTime && time <= meeting.endTime)
}

// quadratic solution
// function hiCal(meetings) {
//     const combinedMeetings = []
//     for (let i=0; i < meetings.length; i++) {
//         let combinedMeeting = meetings[i]
//         if (meetings[i].done){continue}
//         for (let j=i+1; j<meetings.length; j++) {
//             if (meetings[j].done){continue}
//             if (((contained(combinedMeeting, meetings[j].startTime))
//              && (!contained(combinedMeeting, meetings[j].endTime)))
//              || ((contained(combinedMeeting, meetings[j].endTime))
//              && (!contained(combinedMeeting, meetings[j].startTime)))){
//                 combinedMeeting = combineBlock(combinedMeeting, meetings[j])
//                 meetings[j].done = true
//              }
//         }
//         combinedMeetings.push(combinedMeeting)
//     }
//     return combinedMeetings
// }

//refactor for nlogn

// function hiCal(meetings) {
//     if (meetings.length < 2) {
//         return meetings[0]
//     }
//     if (meetings.length === 2) {
//         if (((contained(meetings[0], meetings[1].startTime))
//              && (!contained(meetings[0], meetings[1].endTime)))
//              || ((contained(meetings[0], meetings[1].endTime))
//              && (!contained(meetings[0], meetings[1].startTime)))){
//                 combinedMeeting = combineBlock(combinedMeeting, meetings[j])
//                 meetings[j].done = true
//              }
//     }
//     const combinedMeetings = []
//     for (let i=0; i < meetings.length; i++) {
        
            
//         }
//         combinedMeetings.push(combinedMeeting)
//     }
//     return combinedMeetings
// }
// nlogn solution - trick is to sort first

const hiCal = (meetings) => {
    meetings.sort ( (meetingA, meetingB) => {
        return meetingA.startTime - meetingB.startTime
    })
    let condensedMeetings = [meetings[0]], j=0
    for (let i=1; i<meetings.length; i++){
        if ((meetings[i].endTime > condensedMeetings[j].endTime) &&
        (meetings[i].startTime <= condensedMeetings[j].endTime)) {
            condensedMeetings[j].endTime = meetings[i].endTime
        }
        else {
            condensedMeetings.push(meetings[i])
            j++
        }
    }
    return condensedMeetings
}

const reverseStringInPlace = (str) => {
    let strar = str.split('')
    let temp
    for (let i=0; i < strar.length/2; i++) {
        temp = strar[i]
        strar[i] = strar[strar.length-1-i]
        strar[strar.length-1-i] = temp
    }
    return strar.join('')
}

const reverseWordInPlace = (str) => {
    let strar = str.split('')
    let startIndex = 0, endIndex
    while (startIndex < strar.length) {
        //find the endIndex of this word
        endIndex = startIndex
        while ((endIndex < strar.length) &&
        (strar[endIndex+1]!==' ')) {
            endIndex++
        }
        // reverse word
        let i=startIndex, j=endIndex
        while (i < j) {
            let temp = strar[i]
            strar[i] = strar[j]
            strar[j] = temp
            j--, i++
        }
        //advance startIndex and endIndex
        if (endIndex+2 >= strar.length){break}
        startIndex=endIndex+2
    }
    return strar.join('')
}

function reverseWords(message) {

    // Decode the message by reversing the words
    let i = 0, j = message.length-1
    while (i < j) {
      let temp = message[i]
      message[i] = message[j]
      message[j] = temp
      i++
      j--
    }
    let startWord=0, endWord=0
    while (message[endWord]) {
      while (message[endWord] && message[endWord]!=' ') {
        endWord++
      }
      i = startWord
      j = endWord-1
      while (i < j) {
        let temp = message[i]
        message[i] = message[j]
        message[j] = temp
        i++
        j--
      }
      if (message[endWord+1]){
        startWord = endWord+1
        endWord++
      }
    }
    return message
  }

  function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    let sortedArray = []
    while (myArray.length && alicesArray.length) {
      if (myArray[0] <= alicesArray[0]) {
        sortedArray.push(myArray.shift())
      }
      else {
        sortedArray.push(alicesArray.shift())
      }
    }
    if (myArray.length){
      return sortedArray.concat(myArray)
    }
    if (alicesArray.length){
      return sortedArray.concat(alicesArray)
    }
    return sortedArray
  }

  function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    let i=0, j=0, k=0
    while ((i < takeOutOrders.length || j < dineInOrders.length) && k < servedOrders.length) {
      if (servedOrders[k]===takeOutOrders[i]){
        i++
        k++
      }
      else if (servedOrders[k]===dineInOrders[j]) {
        j++
        k++
      }
      else {
        return false
      }
    }
    
    return k < servedOrders.length || i < takeOutOrders.length || j < dineInOrders.length ? false : true
  }

  function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length
    let movieObj= {}
    for (let i=0; i < movieLengths.length; i++) {
      if (movieObj[movieLengths[i]]) {movieObj[movieLengths[i]]++}
      else {movieObj[movieLengths[i]]=1}
    }
    for (let i=0; i < movieLengths.length; i++) {
      if (movieLengths[i]*2===flightLength) {
        if (movieObj[movieLengths[i]] > 1) {return true}
      }
      else if (movieObj[flightLength-movieLengths[i]]) {return true}
    }
    return false
  }

  function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    theObj = {}
    for (let i=0; i < theString.length; i++) {
      if (theObj.hasOwnProperty(theString[i])) {
        theObj[theString[i]]=!theObj[theString[i]]
      }
      else {
        theObj[theString[i]]=false
      }
    }
    let oddCt = 0
    for (const i in theObj) {
      if (theObj[i]===false) {oddCt++} 
    }
    return oddCt > 1 ? false : true
  }

  function sortScores(unorderedScores, highestPossibleScore) {

    // Sort the scores in O(n) time
    
    let ar = new Array(highestPossibleScore+1)
    for (const score of unorderedScores) {
      if (ar[score]!==undefined) {ar[score]++}
      else {ar[score]=1}
    }
    arIndex=0
    for (let i=highestPossibleScore; i >= 0; i--) {
      if (ar[i] > 0) {
        for (j=0; j < ar[i]; j++){
          unorderedScores[arIndex]=i
          arIndex++
        }
      }
    }
    return unorderedScores
  }

  function highestProductOf3(arrayOfInts) {

    // Calculate the highest product of three numbers
    let highestProd3, highestProd2, highest, lowest, lowestProd2, lowestProd3
    if (arrayOfInts.length < 3){ throw new Error }
    highest = Math.max(arrayOfInts[0], arrayOfInts[1])
    lowest = Math.min(arrayOfInts[0], arrayOfInts[1])
    highestProd2 = arrayOfInts[0]*arrayOfInts[1]
    lowestProd2 = arrayOfInts[0]*arrayOfInts[1]
    highestProd3 = highestProd2*arrayOfInts[2]
    for (let i=2; i < arrayOfInts.length; i++) {
      highestProd3 = Math.max(highestProd3, arrayOfInts[i]*highestProd2, arrayOfInts[i]*lowestProd2)
      highestProd2 = Math.max(highestProd2, arrayOfInts[i]*highest, arrayOfInts[i]*lowest)
      lowestProd2 = Math.min(lowestProd2, arrayOfInts[i]*highest, arrayOfInts[i]*lowest)
      highest = Math.max(highest, arrayOfInts[i])
      lowest = Math.min(lowest, arrayOfInts[i])
    }
    return highestProd3;
  }

  function getProductsOfAllIntsExceptAtIndex(intArray) {

    // Make a list of the products
    if (intArray.length < 2){throw new Error}
    let prodAr = new Array(intArray.length)
    prodAr[0] = 1
    for (let i=1; i < intArray.length; i++) {
      prodAr[i] = prodAr[i-1]*intArray[i-1]
    }
    let prodAr2 = new Array(intArray.length)
    let prodAr3 = new Array(intArray.length)
    prodAr3[intArray.length-1]=prodAr[intArray.length-1]
    prodAr2[intArray.length-1] = 1
    let prodSoFar = 1
    for (let i=intArray.length-1; i >= 0; i--) {
      prodAr[i] = prodSoFar*prodAr[i]
      prodSoFar *= intArray[i]
      // prodAr[i]=prodAr[i+1]*prodAr[i]
    }
  
    return prodAr;
  }

  function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }
  
  function shuffle(array) {
  
    // Shuffle the input in place
    for (let i=0; i < array.length; i++) {
      let temp = array[i]
      let rand = getRandom(i, array.length-1)
      array[i] = array[rand]
      array[rand] = temp
    }
    return array
  }

  function getPermutations(string) {

    // Generate all permutations of the input string
    if (string.length<=1){
      return new Set([string])
      
    }
    let minusFirstChar = getPermutations(string.slice(1))
    let returnSet = new Set()
    
    minusFirstChar.forEach(e => {
      for (let i=0; i <= e.length; i++) {
        returnSet.add(e.slice(0,i)+string[0]+e.slice(i))
      }
    })
    return returnSet;
  }

  function fib(n) {

    // Compute the nth Fibonacci number
    let fibAr = new Array(3)
    fibAr[0]=0
    fibAr[1]=1
    fibAr[2]=1
    if (n < 0){throw new Error}
    if (n <= 2){return fibAr[n]}
    for (let i=3; i<=n; i++){
      let tempFib=fibAr[2]+fibAr[1]
      fibAr[0]=fibAr[1]
      fibAr[1]=fibAr[2]
      fibAr[2]=tempFib
    }
  
    return fibAr[2];
  }
  
  let obj={}

function changePossibilities(amountLeft, denominations, refresh=true) {
  if (refresh){obj={}}
  // Calculate the number of ways to make change
  if (obj[amountLeft]){return obj[amountLeft]}
  if (amountLeft < 0){return 0}
  if (amountLeft===0){return 1}
  obj[amountLeft] = denominations.reduce((total, denomination) => {
    let newAmount = amountLeft-denomination
    return newAmount >= 0 ? total + changePossibilities(newAmount, denominations, false) : total
  },0)
  return obj[amountLeft]

}

function findRotationPoint(words) {

  // Find the rotation point in the vector
  let startIndex=0, endIndex=words.length-1
  while (startIndex!==endIndex) {
    let midPoint = Math.round(startIndex+endIndex/2)
    if (words[midPoint] > words[endIndex]) {
      if (words[midPoint] > words[startIndex]){
        startIndex = midPoint
      }
      else {
        endIndex = midPoint
      }
    }
    else {
      if (words[midPoint] < words[midPoint-1]){
        return midPoint
      }
      else {
        if (words[midPoint] < words[startIndex]) {
          endIndex = midPoint
        }
        else {
          startIndex = midPoint
        }
      }
    }
  }

  return startIndex;
}

// Bad Answer
// function maxDuffelBagValue(cakeTypes, weightCapacity, sorted=false) {

//   // Calculate the maximum value we can carry
//   if (!sorted){
//     cakeTypes.sort((a,b) => {
//       let ratioA = a.weight===0 ? 0 : a.value/a.weight
//       let ratioB = b.weight===0 ? 0 : b.value/b.weight
//       return ratioB-ratioA
//     })
//   }
  
//   let roomRemaining = weightCapacity
//   let totalVal = 0
  
//   for (const cake of cakeTypes){
//     if cake.value
//   }
  
  
//   for (cake of cakeTypes){
//     while (cake.weight < roomRemaining) {
//       totalVal += cake.value
//       roomRemaining -= cake.weight
//     }
//   }
//   return totalVal
// }

// class Solution {
//   public int twoCitySchedCost(int[][] costs) {
//     // Sort by a gain which company has 
//     // by sending a person to city A and not to city B
//     Arrays.sort(costs, new Comparator<int[]>() {
//       @Override
//       public int compare(int[] o1, int[] o2) {
//         return o1[0] - o1[1] - (o2[0] - o2[1]);
//       }
//     });

//     int total = 0;
//     int n = costs.length / 2;
//     // To optimize the company expenses,
//     // send the first n persons to the city A
//     // and the others to the city B
//     for (int i = 0; i < n; ++i) total += costs[i][0] + costs[i + n][1];
//     return total;
//   }
// }
  

module.exports = { hiCal, reverseStringInPlace, reverseWordInPlace }

// let test =   [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
// ]

// console.log(hiCal(test))