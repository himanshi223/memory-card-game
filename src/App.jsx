import ScoreCard from "./components/ScoreCard";
import CardContainer from "./components/CardContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [max, setMax] = useState(0);
  function increaseScore(){
    setScore(score+1);
  }
  function resetScore(){
    if(score>max) setMax(score);
    setScore(0);
  }
  return (
    <main>
      <h1>Memory Game </h1>
      <p className={"info"}>Click a card that you've not clicked before to get a point.</p>
      <ScoreCard score={score} max={max}/>
      <CardContainer movie={"tangled"} increaseScore = {increaseScore} resetScore = {resetScore}/>
    </main>
  )
}

export default App
