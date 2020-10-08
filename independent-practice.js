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