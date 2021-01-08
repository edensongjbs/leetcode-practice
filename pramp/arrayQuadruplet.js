/*function findArrayQuadruplet(arr, s) {
  // your code goes here
  // let i1=0, i2=1, i3=2, i4=4
  const length = arr.length
  if (length<4){return []}
  arr.sort((a,b) => a-b)
  for (let i1=0; i1<length-3; i1++) {
    for (let i2=i1+1; i2<length-2; i2++) {
      for (let i3=i2+1; i3<length-1; i3++) {
        for (let i4=i3+1; i4<length; i4++) {
          if (arr[i1]+arr[i2]+arr[i3]+arr[i4]===s) {
            return [arr[i1], arr[i2], arr[i3], arr[i4]]
          }
        }
      }
    }
  }
  return []
}*/

function findArrayQuadruplet(arr, s) {
    if (arr.length < 4) return []
    arr.sort()
    //console.log('mar2')
    for (let i1=0; i1<arr.length-3; i1++) {
      for (let i2=i1+1; i2<arr.length-2; i2++) {
        let sumComplement = s-(arr[i1]+arr[i2])
        
        let lowerBound=i2+1, upperBound=arr.length-1
        while (lowerBound < upperBound) {
          if ((arr[lowerBound]+arr[upperBound]) < sumComplement) lowerBound++
          else if ((arr[lowerBound]+arr[upperBound]) > sumComplement) upperBound--
          else return [arr[i1], arr[i2], arr[lowerBound], arr[upperBound]]
        }
      }
    }
    //console.log('mar')
    return []
  }
  
  testIn = [2, 7, 4, 0, 9, 5, 1, 3]
  console.log(findArrayQuadruplet(testIn, 20))
  
  /*
  
  input: unsorted array of numbers, integer sum
  output: sorted array of 4 values adding up to sum
  
  special cases: quadruplet doesn't exist: return [] (if array is short)
  
  pseudo-code:
  sort the input
  [0,1,2,3,4,5,7,9]
  [9,7,5,4,3,2,1,0]
  [9,7,5,3,2,1,0,0]
  
  
  i1=0
  i2=1
  i3=2
  i4=3
  
  if sum(i) > s {
    
  }
  
  
  
  
  */