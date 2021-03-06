//Palindrome

//recursive
var isPalindrome = function(x) {
    if (typeof(x)==='number'){ x = x.toString()}
    if (x.length <= 2) {
        return x[0]===x[x.length-1]
    }
    else{
        return (x[0]===x[x.length-1])  && isPalindrome(x.slice(1, x.length-1))
    }
}

//loop (more efficient)
var isPalindrome = function(x) {
    x = x.toString()
    for (let i=0; i<x.length/2; i++) {
        if (x[i] !== x[x.length-1-i]) {return false}
    }
    return true
}

//Both above solutions are technically not allowed and this is the one from Leetcode:

public class Solution {
    public bool IsPalindrome(int x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
        return x == revertedNumber || x == revertedNumber/10;
    }
}

//Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let y = parseInt(x.toString().split('').reverse().join(''))
     if (y >= (2**31)) {return 0}
     if (x < 0) {y = 0-y}
     return y
};

// function numDigits(x) {
//     return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
// }

// var reverse = function(x) {
//     let lastDigit = x%10
//     if (numDigits(x) <= 1) {return x}
//     let answer = parseInt(`${lastDigit}${reverse(Math.floor(x >= 0 ? x/10 : 0-x/10))}`)
//     if (answer >= (2**31)) {return 0}
//     // return x >= 0 ? answer : 0-answer
//     return answer
// }

// twoSum 

var twoSum = function(nums, target) {
    for (let i1=0; i1 < nums.length; i1++) {
        for (let i2=i1+1; i2 < nums.length; i2++)
        if (nums[i1]+nums[i2]==target) {
            return [i1, i2]
        }
    }
};