function findRepeat(numbers) {

    // Find the number that appears twice
    let triangleSum = (((numbers.length-1)**2)+(numbers.length-1))/2
    let trueSum = numbers.reduce( (sum, num) => sum+num, 0)
    console.log(trueSum, triangleSum)
    return trueSum-triangleSum;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'short array';
  let actual = findRepeat([1, 2, 1]);
  let expected = 1;
  assertEqual(actual, expected, desc);
  
  desc = 'medium array';
  actual = findRepeat([4, 1, 3, 4, 2]);
  expected = 4;
  assertEqual(actual, expected, desc);
  
  desc = 'long array';
  actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
  expected = 2;
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
  }
  
  function assertThrowsError(func, desc) {
    try {
      func();
      console.log(`${desc} ... FAIL`);
    } catch (e) {
      console.log(`${desc} ... PASS`);
    }
  }