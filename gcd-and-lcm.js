function gcd(a, b) {
    // Case # 1 is smaller the denom of larger
    // if so return smaller
    if (a-b < 0) {
        const temp=a
        a=b
        b=temp
    }
    if (a%b===0) {
        return b
    }
    else {
        return gcd(b, a%b)
    }
    // 
}

function lcm(a, b) {
    return (a*b)/(gcd(a,b))
}

console.log(lcm(21, 6))