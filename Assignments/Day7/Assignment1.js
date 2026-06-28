function containsVowel(inputString) {
    for(let i=0; i < inputString.length; i++) {
        if(inputString[i] === 'a' || inputString === 'e' || inputString === 'i' || inputString === 'o' ||
            inputString === 'u' || inputString[i] === 'A' || inputString === 'E' || inputString === 'I'
            || inputString === 'O' || inputString === 'u' )

        return "Vowel Found"
    }
    return "No Vowel"
}

console.log(containsVowel("Vasant"));
console.log(containsVowel("Rhythm"));
console.log(containsVowel("AUTOMATION"));

