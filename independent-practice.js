var addTwoNumbers = function(l1, l2) {
    let carryOver, currentColumn, firstNode, currentNode, nextNode
    currentNode = {val:null, next:null}
    firstNode = currentNode
    while ((l1 && l1.next) || (l2 && l2.next)) {
        nextNode = {val:null, next:null}
        if (!l1){l1={val:0, next:null}}
        if (!l2){l2={val:0, next:null}}
        currentColumn = l1.val+l2.val
        if (carryOver) {currentColumn+=carryOver}
        if (currentColumn >= 10) {
            carryOver = Math.floor(currentColumn/10)
            currentColumn = currentColumn%10
        }
        else {
            carryOver = 0
        }
        currentNode.val = currentColumn
        currentNode.next = nextNode
        currentNode = currentNode.next
        l1=l1.next
        l2=l2.next
    }
    nextNode = {val:null, next:null}
    if (!l1){l1={val:0, next:null}}
    if (!l2){l2={val:0, next:null}}
    currentColumn = l1.val+l2.val
    if (carryOver) {currentColumn+=carryOver}
    if (currentColumn >= 10) {
        carryOver = Math.floor(currentColumn/10)
        currentColumn = currentColumn%10
    }
    else {
        carryOver = 0
    }
    currentNode.val = currentColumn
    currentNode.next = carryOver>0 ? {val:carryOver, next:null} : null
    return firstNode
};



var lengthOfLongestSubstring = function(s) {
    let i2=0, longest=0, map={}, h
    for (let i1=0; i1 < s.length; i1++) {
        if (map[s[i1]] || map[s[i1]]===0) {
            // console.log(i1, i2)
            longest = longest >= i1-i2 ? longest : i1-i2
            map[s[i1]]=i1
            i2=i2+1
            // h="if"
        }
        else {
            // if (i1===s.length-1 && longest <= i1-i2){longest++}
            map[s[i1]]=i1
            // h="else"
        }
        // console.log(h, i1, i2, longest, map)
    }
    return longest > s.length-i2 ? longest : s.length-i2
};

var lengthOfLongestSubstring = function(s) {
    let longest=0, map={}, lastAppearedAt, limitedBy
    if (s.length<1) {return 0}
    for (let i1=0; i1 < s.length; i1++) {
        lastAppearedAt = map[s[i1]]
        if ( lastAppearedAt || lastAppearedAt===0) {
            // console.log(i1, i2)
            if (longest < i1-lastAppearedAt) {
                longest=i1-lastAppearedAt
                limtedBy=s[i1]
            }
            map[s[i1]]=i1
            // i2=i2+1
            // h="if"
        }
        else {
            lastAppearedAt = lastAppearedAt || 0
            console.log(i1, lastAppearedAt, longest, map)
            if (longest < i1-s[limitedBy]-1) {
                longest = i1-s[limitedBy]-1
            }
            map[s[i1]]=i1
            // h="else"
        }
        // console.log(h, i1, i2, longest, map)
    }
    return longest > s.length-map[s[s.length-1]] ? longest : s.length-map[s[s.length-1]]
};

// Good solution
var romanToInt = function(s) {
    arabic=0
    for (let i=0; i < s.length; i++) {
        switch (s[i]) {
            case 'C':
                arabic += s[i+1]==='D' || s[i+1]==='M'? -100 : 100
                break
            case 'X':
                arabic += s[i+1]==='L' || s[i+1]==='C'? -10 : 10 
                break
            case 'I':
                arabic += (s[i+1]==='V' || s[i+1]==='X') ? -1 : 1
                break
            case 'M':
                arabic += 1000
                break
            case 'D':
                arabic += 500
                break
            case 'L':
                arabic += 50
                break
            case 'V':
                arabic += 5
                break
        }
    }
    return arabic
};

//naive solution
var longestCommonPrefix = function(strs) {
    let longest=""
    if (!strs || strs.length<1) {return longest}
    if (strs.length ===1) {return strs[0]}
    for (let i=0; i<strs[0].length; i++) {
        let curChar=strs[0][i]
        for (let i2=1; i2<strs.length; i2++) {
            if (strs[i2][i]!==curChar){return longest}
            else{
                    if (i2===strs.length-1) {
                    console.log(longest, curChar)
                    longest+=curChar
                }
            }
        }
    }
    return longest

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i2, longest=""
    for (let i=1; i<s.length; i++) {
        if s[i]==s[i-1] {
            longest = longest.length < 2 ? s.slice(i-1, i+1) : longest
            i2=0
            while (i+i2<s.length && i-1-i2 >= 0) {
                //compare 
            }
        }
    }
};

//Good solution!
var isSameTree = function(p, q) {
    if (p===null && q===null){return true}
    if (p===null || q===null){return false}
    if (p.val!==q.val){return false}
    else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

// TERRIBLE 3 sum solution .  Not finished

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sol = []
    for (let i=0; i < nums.length-2; i++) {
        for (let j=i+1; j < nums.length-1; j++) {
            for (let k=j+1; k < nums.length; k++) {
                if (nums[i]+nums[j]+nums[k]===0) {
                    
                    sol.push([nums[i], nums[j], nums[k]].sort())
                }
            }
        }
    }
    for (let i=0; i<sol.length-1; i++) {
        let checking = sol[i]
        for let (j=i+1; j<sol.length; j++) {
            if (sol[i][0]===sol[j][0] && sol[i][1]===sol[j][1] && sol[i][2]===sol[j][2])           {
                i
            }
        }
            
        }
    }
    return sol 
  };


  // Parentheses .  Faster than 75%


var isValid = function(s) {
    const pars = []
    for (let i=0; i<s.length; i++) {
        if (s[i]==="(" || s[i]==="[" || s[i]==="{") {
            pars.push(s[i])
        }
        else {
            let e = pars.pop()
            switch (s[i]) {
                case ')' :
                    if (e!=='('){return false}
                    break
                case ']':
                    if (e!=='['){return false}
                    break
                case '}':
                    if (e!=='{'){return false}
                    break
                default:
                    return false
                    break
            }
        }
    }
    if (pars.length > 0) {return false}
    else {return true}
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0, j=0
    while (j < nums.length) {
        if (nums[j]!==val) {
            nums[i]=nums[j]
            i++
        }
        j++
    }
    return i
};

var searchInsert = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n===1) {
        return "1"
    }
    let cas = countAndSay(n-1), num=cas[0], times=0, str=""
    for (let i=0; i<cas.length; i++){
        if (cas[i]===num) {
            times++
        }
        else {
            str+=(times.toString()+num)
            num=cas[i]
            times=1
        }
    }
    if (times>0) {str+=(times.toString()+num)}
    return str
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wa=s.split(' ').filter(w => w!='')
    if (wa.length > 0) {
        return wa[wa.length-1].split('').length
    }
    else {
        return 0
    }
}

var plusOne = function(digits) {
    let inc=1
    for (let i=digits.length-1; i>=0; i--) {
        if (inc===0) {return digits}
        digits[i] += inc
        if (digits[i] > 9) {
            digits[i]= digits[i]%10
            inc=1
        }
        else {
            inc=0
        }
    }
    return inc > 0 ? [1, ...digits] : digits
};

var mySqrt = function(x) {
    return parseInt(Math.sqrt(x))
};

var climbStairs = function(n) {
    if (n <= 2){return n}
    let ar=[1,2]
    for (let i=2; i<n; i++) {
        ar[i]=ar[i-1]+ar[i-2]
    }
    return ar[n-1]
};

var deleteDuplicates = function(head) {
    if (!head){return null}
    let behind=head, ahead=behind.next
    while (behind && behind.next) {
        if (!ahead){break}
        if (ahead.val===behind.val) {
            ahead=ahead.next
            behind.next=ahead
        }
        else {
            behind=behind.next
            ahead=ahead.next
        }
    }
    return head
};

var merge = function(nums1, m, nums2, n) {
    let j=0, current=n+m-1
    m--
    n--
    while (current >= 0) {
        if (n<0 || nums1[m] >= nums2[n]) {
            nums1[current]=nums1[m]
            m--
        }
        else {
            nums1[current]=nums2[n]
            n--
        }
        current--
    }
    return nums1
};

var rob = function(nums) {
    oddCount=0
    evenCount=0
    for (let i=0; i<nums.length; i++){
        if (i%2===0) evenCount+=nums[i]
        else oddCount+=nums[i]
    }
    return Math.max(oddCount, evenCount)
};

/**
 * @param {number[]} data
 * @return {number}
 */


let countOnes = (ar) => {
    let count=0
    for (let i=0; i<ar.length; i++){
        if (ar[i]===1) count++
    }
    return count
}

var minSwaps = function(data) {
    let totalOnes = countOnes(data)
    if (totalOnes <= 1) return 0
    let maxCount=countOnes(data.slice(0,totalOnes))
    let currentCount = maxCount
    for (let i=0; i<(data.length-totalOnes); i++) {
        if (data[i]===0 && data[totalOnes+i]===1) {
            currentCount++
        }
        else if (data[i]===1 && data[totalOnes+i]===0) currentCount--
        maxCount = Math.max(maxCount, currentCount)
    }
    return totalOnes-maxCount
};

/* maximal Square - good solution!!  better than 75% on time and 91% on space
function checkLastRowColOfSquare(matrix,y,x,lim) {
    if (!matrix[y+lim]) return false
    if (!matrix[y+lim][x+lim]) return false
    for (let i=0; i<=lim; i++) {
        if (matrix[y+lim][x+i]!=="1") return false
        if (matrix[y+i][x+lim]!=="1") return false
    }
    return true
}

var maximalSquare = function(matrix) {
    let max=0
    for (let i1=0; i1 < matrix.length; i1++) {
        for (let i2=0; i2 < matrix[i1].length; i2++) {
            if (matrix[i1][i2]==="1"){
                let moreRowCols=1
                while (checkLastRowColOfSquare(matrix, i1, i2, moreRowCols)){
                    moreRowCols++
                }
                max = Math.max(max, moreRowCols)
            }
        }
    }
    return max**2
};

/*
edge-case: if 0 or 1 1's, then return 0

[0,1,1,1,1,0,1,0,0,0,]
[           ]


0:3
1:2
2:3
4:3
5:3


[1,0,1,0,1,0] [0,0,1,1,1,1]

[1,0,0,0,1][0,0,1,0]


[1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1] //21
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]

0:





*/

function hasRepeatDigits(ar, firstNum, restNums) {
    if (restNums.filter(e => e==="0").length > 1) return 1
    if (ar[restNums.filter(e => e!=="0").join('')]) return 1
    if (ar[restNums.join('')]) return 1
    if (restNums.includes(firstNum)) return 1
    return 0
}


var numDupDigitsAtMostN = function(N) {
    let count=0, ar= new Array(N+1).fill(0)
    for (let i=0; i<=N; i++){
        let stringI = i.toString()
        let arI=stringI.split('').slice(1)
        ar[stringI]=hasRepeatDigits(ar, stringI[0], arI)
        if (ar[stringI]) count++
    }
    return count
};

function hasRepeatDigits(set, firstNum, restNums) {
    if (!restNums.length) return 0
    if (set.has(restNums.join(''))) return 1
    if (restNums.includes(firstNum)) return 1
    if (restNums[0]==="0") return hasRepeatDigits(set, restNums[0], restNums.slice(1))
    return 0
}


var numDupDigitsAtMostN = function(N) {
    let count=0, set = new Set
    for (let i=0; i<=N; i++){
        let stringI = i.toString()
        let arI=stringI.split('').slice(1)
        if (hasRepeatDigits(set, stringI[0], arI)){
            set.add(stringI)
            count++
        }
    }
    return count
};
/*
not working
/**
 * @param {number} n
 * @return {string}
var convertToTitle = function(n) {
    const convertObj= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let excelCol=""
    while (n > 26) {
        let leftOver=n%26
        excelCol+=convertObj[leftOver-1]
        n-=26
    }
    excelCol+=convertObj[n-1]
    return excelCol
};
*/