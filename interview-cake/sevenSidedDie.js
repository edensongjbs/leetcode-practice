function rand5() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }
  
  function rand7() {
    let inc=0
    // Implement rand7() using rand5()
    let matrix=[]
    for (let i=0; i<5; i++) {
      matrix[i]=[]
      for (let j=0; j<5; j++) {
        inc++
        matrix[i][j]=inc
      }
    }
    let guess=22
    while (guess > 21) {
      guess = matrix[rand5()-1][rand5()-1]
    }
  
    return guess
  }
  
  
  for (let i = 0; i < 14; i++) {
    console.log(rand7());
  }
  
  /*  Proper Solution:
  
    function rand7() {
  
    while (true) {
  
      // Do our die rolls
      const roll1 = rand5();
      const roll2 = rand5();
  
      const outcomeNumber = (roll1-1) * 5 + (roll2-1) + 1;
  
      // If we hit an extraneous
      // outcome we just re-roll
      if (outcomeNumber > 21) continue;
  
      // Our outcome was fine. return it!
      return outcomeNumber % 7 + 1;
    }
  }*/