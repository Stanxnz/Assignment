const correctWord = "dog";
const numberOfCharInWord = correctWord.length;
let wordDisplay = ""
for (let i = 0; i < numberOfCharInWord; i++) {
wordDisplay = wordDisplay + " -"

} 

console.log(wordDisplay);

const answer = await askQuestion ("Guess a char or the word");

if(answer == correctWord){
// The word was guessed?
}