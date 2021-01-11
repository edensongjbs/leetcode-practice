function contains(array, value) {

    // Check if an integer is present in the array
    let min=0, max=array.length-1
    // if (!array.length) throw new Error
    if (array.length===1) return array[0]===value
    while ((min+1) < max) {
      if (array[min]===value || array[max]===value) return true
      let mid = Math.floor((min+max)/2)
      console.log(min, max, mid)
      if (array[mid] < value) min=mid
      else if (array[mid] > value) max=mid
      else return true
    }
  
    return false;
  }
  
  
  //([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'empty array';
  let actual = contains([], 1);
  let expected = false;
  assertEquals(actual, expected, desc);
  
  desc = 'one item array, number present';
  actual = contains([1], 1);
  expected = true;
  assertEquals(actual, expected, desc);
  
  desc = 'one item array, number absent';
  actual = contains([1], 2);
  expected = false;
  assertEquals(actual, expected, desc);
  
  desc = 'small array, number present';
  actual = contains([2, 4, 6], 4);
  expected = true;
  assertEquals(actual, expected, desc);
  
  desc = 'small array, number absent';
  actual = contains([2, 4, 6], 5);
  expected = false;
  assertEquals(actual, expected, desc);
  
  desc = 'large array, number present';
  actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
  expected = true;
  assertEquals(actual, expected, desc);
  
  desc = 'large array, number absent';
  actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
  expected = false;
  assertEquals(actual, expected, desc);
  
  desc = 'large array, number first';
  actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
  expected = true;
  assertEquals(actual, expected, desc);
  
  desc = 'large array, number last';
  actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
  expected = true;
  assertEquals(actual, expected, desc);
  
  function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }