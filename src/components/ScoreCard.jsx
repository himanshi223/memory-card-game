function ScoreCard({score, max}){
  return (
    <div className = "score-card">
        <p>Score = {score}</p>
        <p>Max Score = {max}</p>
    </div>
  )
}

export default ScoreCard;