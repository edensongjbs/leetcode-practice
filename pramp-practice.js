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