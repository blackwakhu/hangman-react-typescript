import './App.css'
import { useState } from 'react'

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
  const [isFin, setFin] = useState(false)
  const generateRandom = () => {
    const random = Math.floor(Math.random() * vocabulary.length)
  }
  return (
    <main>
      <h1>Hangman Game</h1>
      <div>
        <p></p>
        <div>
          {letters.map((letter, index) => (
            <button key={index}>{letter}</button>
          ))}
        </div>
      </div>
    </main>
  )
}