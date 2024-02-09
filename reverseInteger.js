// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.

function reverseInteger(num) {
   
    let numString = Math.abs(num).toString();
    
    let reversedStr = numString.split("").reverse().join("");
    
    let reversedNum = parseInt(reversedStr);
    

    return num < 0 ? -reversedNum : reversedNum;
}


console.log(reverseInteger(500));
console.log(reverseInteger(-56));
