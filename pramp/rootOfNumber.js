function root(x, n) {
    // your code goes here
    let lower=0.0, upper=x, guess = (lower+upper)/2
    while ((guess-lower) >= 0.001) { //figure out condition
    //   console.log(upper, lower, guess)
      if (Math.pow(guess, n)=== x) return guess
      else if ((Math.pow(guess, n)) > x) {
      // bring down upperbound
        upper = guess //4.5
      }
      else {
        //bring up lowerbound
        lower = guess
      }
      guess = (lower+upper)/2
    }
    return guess
  }
  
  console.log(root(7,3))