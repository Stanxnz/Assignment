const correctWord = "dog";
const numberOfCharInWord = correctWord.length;
let wordDisplay = "";
for (let i = 0; i < numberOfCharInWord; i++) {
wordDisplay = wordDisplay + " -"

} 

console.log(wordDisplay);

const answer = await askQuestion ("Guess a char or the word");

if(answer == correctWord);
const correctWord = "dog".toLowerCase();
const numberOfCharInWord = correctWord.length;
let guessedWord = "".padStart(correctWord.length, "_");
let wordDisplay = "";
let isGameOver = false;

for (let i=0; i < numberOfCharInWord; i++){
    wordDisplay = wordDisplay+guessedWord[i]+" ";
}

const answer = (await askQuestion("Guess a char or the word :").toLowerCase);

if (answer == correctWord){
    isGameOver = true;
} else if(answer.length == 1){

}else if (ifPlayerGuessedLetter()){

    for(let i=0; i < correctWord.length; i++){
        if(correctWord[i] == answer){
            wasGuessCorrect = true;
        }
    }
}else{
    
}

function ifPlayerGuessedLetter(){
    return answer.length ==1
}
