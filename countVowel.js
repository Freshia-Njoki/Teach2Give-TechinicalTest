// Write a program that counts the number of vowels in a sentence.

function countVowels(sentence) {
   
    sentence = sentence.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let vowelCount = 0;
    
    for (let char of sentence) {      
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

console.log(countVowels("Hello World"));
