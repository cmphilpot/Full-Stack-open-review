import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statistics = ({
    good,
    neutral,
    bad,
    all,
    average,
    positive
  }) => {
    if (all === 0) {
      return (
        <>
          <p>No feedback given</p>
        </>
      )
    } 
    
    return (
      <>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {average}</p>
        <p>Positive {positive}</p>
      </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all > 0 ? ((good - bad) / all) : 0;
  const positive = all > 0 ? ((good / all) * 100) : 0;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>

      <Statistics 
        good={good}
        neutral={bad}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App