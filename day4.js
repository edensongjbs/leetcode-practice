function gcdHelper(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b; // % is remainder
        a = temp;
    }
    return a;
}

function lcmHelper(a, b) {
    return a * (b / gcdHelper(a, b));
}
/*
* Complete the 'getTotalX' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER_ARRAY a
*  2. INTEGER_ARRAY b
*/

function lcm(ar) {
let lcm = ar[0]
for (let i=1; i<ar.length; i++) {
    lcm = lcmHelper(lcm, ar[1])
}
return lcm
}

function gcd(ar) {
let gcd = ar[0]
for (let i=1; i<ar.length; i++) {
    gcd = gcdHelper(gcd, ar[1])
}
return gcd
}

function getTotalX(a, b) {
// Write your code here
let count=0
let alcm = lcm(a)
let bgcd = gcd(b)
// console.log(alcm, bgcd)
for (let i = alcm; i <= bgcd; i=i+alcm) {
    if (bgcd%i===0) {count++}
}
return count
}


// Need To Work on Implementing LCM and GCD