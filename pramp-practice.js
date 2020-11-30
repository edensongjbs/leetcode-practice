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