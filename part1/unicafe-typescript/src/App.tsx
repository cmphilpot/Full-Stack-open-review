import './App.css'
import React from 'react'

interface StatisticLineProps {
  text: string;
  value: number | string
}

const StatisticLine = ({text, value}: StatisticLineProps) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
};

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  all: number;
  average: number;
  positive: number;
}

const Statistics = ({
    good,
    bad,
    neutral,
    all,
    average,
    positive
  }: StatisticsProps) => {
  return (
    <>
      <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average.toFixed(2)} />
            <StatisticLine text="positive" value={positive.toFixed(2)} />
          </tbody>
        </table>
    </>
  )
};

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const [good, setGood] = React.useState<number>(0)
  const [neutral, setNeutral] = React.useState<number>(0)
  const [bad, setBad] = React.useState<number>(0)
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App;
