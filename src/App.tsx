import './App.css'
import { useState, useEffect } from 'react'

const letters: string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
const vocabulary: string = [
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
  // const generateWord = ()=>{
  //   if (isFin == true){
  //     setWord(vocabulary[ind])
  //     setFin(false)
  //   }
  // }
  useEffect(function(){
    function runAtStart(){
      setGuess(generateRandom())
      setWord(guess.split("").map(char=> '_'.repeat(char.length)).join(''))
    }
    runAtStart()
  }, [])
  const generateRandom = () => {
    let random = Math.floor(Math.random() * vocabulary.length)
    return vocabulary[random]
  }
  return (
    <main>
      <h1>Hangman Game</h1>
      <div>
        <h2>Score: {score}</h2>
        <p className="word_char">{word}</p>
        <div>
          {letters.map((letter, index) => (
            <button key={index}>{letter}</button>
          ))}
        </div>
      </div>
    </main>
  )
}