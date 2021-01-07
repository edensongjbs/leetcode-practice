function isValid(code) {

    // Determine if the input code is valid
    const matches = {
      ')':'(',
      ']':'[',
      '}':'{'
    }
    const openers = '([{'
    let openerAr = []
    for (let i=0; i < code.length; i++) {
      if (openers.includes(code[i])) openerAr.push(code[i])
      
      else if (openerAr.pop()!==matches[code[i]]) return false
    }
    return !openerAr.length
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'valid short code';
  assertEqual(isValid('()'), true, desc);
  
  desc = 'valid longer code';
  assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);
  
  desc = 'mismatched opener and closer';
  assertEqual(isValid('([][]}'), false, desc);
  
  desc = 'missing closer';
  assertEqual(isValid('[[]()'), false, desc);
  
  desc = 'extra closer';
  assertEqual(isValid('[[]]())'), false, desc);
  
  desc = 'empty string';
  assertEqual(isValid(''), true, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }