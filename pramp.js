function arrayOfArrayProducts(arr) {
    let prodArr = []
    if (arr.length <= 1){return prodArr}
    let leftProd = 1
    for (let i = 0; i < arr.length; i++) {
      prodArr[i] = leftProd
      leftProd *= arr[i]
    }
    let rightProd = 1
    for (let i=arr.length-1; i >= 0; i--) {
      prodArr[i] *= rightProd
      rightProd *= arr[i] 
    }
    return prodArr
  }
  
  
  console.log(arrayOfArrayProducts([8,10,2]))