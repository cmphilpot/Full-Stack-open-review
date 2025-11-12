import React from 'react'
import './App.css'

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => <button onClick={onClick}>{text}</button>

interface MostPopularProps {
  anecdotes: string[]
  votes: number[]
}

const MostPopular = ({ anecdotes, votes }: MostPopularProps) =>{
  const highestVoteCount = Math.max(...votes);
  const mostPopularAnecdote = anecdotes[votes.indexOf(highestVoteCount)];

  return (
    <>
      <h1>Anecdote with most votes</h1>
        {mostPopularAnecdote}
        <p>Has {highestVoteCount} votes</p>  
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const LEN = anecdotes.length;
  const [selected, setSelected] = React.useState<number>(0);
  const [votes, setVotes] = React.useState<number[]>(Array(LEN).fill(0));
  const newVotes = [...votes];

  const handleNextAnecdoteClick = () => {
    setSelected(getRandomInt(LEN));
  }

  const handleVoteClick = () => {
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>  
        <Button onClick={handleVoteClick} text='vote'/>
        <Button onClick={handleNextAnecdoteClick} text='next anecdote'/>

        <MostPopular 
          anecdotes={anecdotes}
          votes={votes}
        />

      </div>
    </>
  )
}

export default App

