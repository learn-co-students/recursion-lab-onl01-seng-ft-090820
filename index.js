// Code your solution here!

function printString(n) { 
    console.log(n[0])
    if (n.length > 1) { 
        let subString = n.substring(1, n.length)
        printString(subString)
    } else { 
        console.log(n)
    }
}

function reverseString(n) { 
   if ( n < 2 ) { 
       return n 
   } else { 
       let sub = n.substring(1)
       return reverseString(sub) + n[0]
   }
}

function isPalindrome(n) { 
    if (n.length === 1){
        return true
    } else if(n[0] === n[n.length-1]) { 
        let sub = n.substring(1, n.length - 1)
       return isPalindrome(sub)
    } else {
        return false 
    }
}

function addUpTo(arr, n){
        return n ? arr[n] + addUpTo(arr, (n - 1)) : arr[n]
}

function maxOf(arr) { 
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.shift(), maxOf(arr))
    }
}

function includesNumber(arr, num) { 
    if (arr.length < 1) { 
        return false 
    }
    else {
        if (arr[0] === num){
            return true
        } else {
            return includesNumber(arr.slice(1), num)
        }    
    }
}