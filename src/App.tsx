import './App.css'

const letters: string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]

export default function App() {
  return (
    <main>
      <h1>Hangman Game</h1>
      <div>
        <p></p>
        <div>
          {letters.map((letter) => (
            <button>{letter}</button>
          ))}
        </div>
      </div>
    </main>
  )
}