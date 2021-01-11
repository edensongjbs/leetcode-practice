// function findUniqueDeliveryId(deliveryIds) {

//   // Find the one unique ID in the array
//   let singles = new Set()
  
//   deliveryIds.forEach(id => {
//     if (singles.has(id)) {
//       singles.delete(id)
//     }
//     else {
//       singles.add(id)
//     }
//   })
//   return Array.from(singles)[0]
// }



function findUniqueDeliveryId(deliveryIds) {
    let answer=0
    deliveryIds.forEach(id => {
      answer = answer^id
    })
    return answer
  }
  