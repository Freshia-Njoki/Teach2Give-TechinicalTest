// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.

function capitalizeWords(str) {
    const sentence = str.split(" ");
    const capitalizedWords = sentence.map(
        word => word.charAt(0).toUpperCase() + word.slice(1)
        );
    
    return capitalizedWords.join(" ");
}

console.log(capitalizeWords("hi"));
console.log(capitalizeWords("i love programming"));
