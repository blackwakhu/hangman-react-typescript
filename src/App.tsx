import './App.css'
import { useState } from 'react'

const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
const vocabulary: string[] = [
  "Apple", "Book", "Chair", "Dog", "Elephant", "Flower", "Guitar", "House", "Ice cream", "Jacket", "Key", "Lamp", "Mountain", 
  "Notebook", "Ocean", "Pencil", "Quilt", "River", "Shoe", "Table", "Umbrella", "Vase", "Window", "Xylophone", "Yarn", "Zebra", 
  "Balloon", "Cake", "Desk", "Egg", "Fork", "Globe", "Harp", "Ink", "Jelly", "Kite", "Ladder", "Mirror", "Newspaper", "Owl", 
  "Pear", "Quill", "Rope", "Sock", "Train", "Violin", "Watermelon", "Xanthophyll", "Yarn", "Zipper", "Anchor", "Bed", "Candle", 
  "Doll", "Eraser", "Feather", "Giraffe", "Hinge", "Igloo", "Jam", "Kangaroo", "Lemon", "Mango", "Notebook", "Orange", "Pillow", 
  "Quartz", "Raspberry", "Scarf", "Toothbrush", "Umbrella", "Vase", "Wagon", "Xylophone", "Yak", "Zipper", "Acorn", "Balloon", 
  "Crayon", "Diamond", "Eggplant", "Feather", "Grape", "Hammock", "Icicle", "Jar", "Kiwi", "Lollipop", "Mushroom", "Nest", 
  "Octopus", "Pineapple", "Quill", "Rabbit", "Scarf", "Telescope", "Unicorn", "Vase", "Wagon"
]

export default function App() {
  const [word, setWord] = useState("")
  const [isFin, setFin] = useState(true)
  const [ind, setInd] = useState(0)
  const [score, setScore] = useState(0)
  const [guess, setGuess] = useState("")
  const [win, setWin] = useState(false)
  const [showgame, setShowgame] = useState(false)
  const generateRandom = () => {
    let random = Math.floor(Math.random() * vocabulary.length)
    return vocabulary[random]
  }
  const generateDashes = () => {
    let randomWord: string = generateRandom().toUpperCase();
    setGuess(randomWord);
    let dashesArray: string[] = randomWord.split("").map((char) => "_");
    setWord(dashesArray.join(""));
  };
  const isWordEqual = (word: string, guess: string) => {
    return word.toLowerCase() === guess.toLowerCase();
  }
  const handleClick = function(letter:string){
    console.log(guess)
    if (ind < guess.length) {
      if (guess[ind] === letter) {        
        let newWord = word.split('');
        newWord[ind] = letter;
        setInd(ind + 1);
        setWord(newWord.join(''));
        if (isWordEqual(guess, newWord.join(''))) {
          setWin(true);
          setScore(score + 1);
        }
      } else {
        alert("Not the letter")
      }
    }
  }
  const handleVisible = function(){
    setShowgame(true)
    generateDashes()
  }
  const resetPlay = function(){
    generateDashes()
    setWin(false)
    setScore(0)
    setInd(0)
  }
  const playAgain = function(){
    generateDashes()
    setWin(false)
    setInd(0)
  }
  return (
    <main>
      <h1>Hangman Game</h1>
      <div className={`play-div ${showgame ? 'hidden' : ''}`}>
        <button onClick={handleVisible}>Play</button>
      </div>
      <div className={`game-div ${showgame ? '' : 'hidden'}`}>
        <h2>Score: {score}</h2>
        <div className={`${win ? 'hidden': ''}`}>
          <p className="word_char">{word}</p>
          <div className="keyboard-div">
            {letters.map((letter, index) => (
              <button onClick={()=>handleClick(letter)} className="keyboard-btns" key={index}>{letter}</button>
            ))}
          </div>
          <button className='keyboard-reset' onClick={resetPlay}>Reset Progress</button>
        </div>
        <div className={`${win ? '': 'hidden'}`}>
          <p className="win-msg">You Got The Word</p>
          <button onClick={playAgain}>Play Again</button>
          <button onClick={resetPlay}>Reset Progress</button>
        </div>
      </div>
    </main>
  )
}