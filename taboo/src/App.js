import React, {useState} from "react";
import './App.css';
import Card from "./components/Card";
import words from "./Words";

function App() {
    const [points, setPoints] = useState(0)
    const shuffled = words.sort(() => Math.random() - 0.5)


    const card = () => {
        let index = -1;
        index++;
        if (index === shuffled.length) {
            return "Game over";
        }
        return (
            <Card word={shuffled[index].word} forbidden={shuffled[index].forbidden}/>
        )
    }

    const pass = () => {
        setPoints(points - 1)
    }

    const correct = () => {
        setPoints(points + 1)
    }


  return (
    <div className="App">
      <h1> Taboo </h1>

        {card()}

        <br/>

        <button onClick={pass}>Pass</button>
        <button onClick={correct}>Next</button>

        <h2>{points}</h2>
    </div>
  );
}

export default App;
