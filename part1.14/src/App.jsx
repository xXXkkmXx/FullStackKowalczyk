import { useState } from 'react'

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
  ]
  const [selected, setSelected] = useState(0);
  const [pointsTest,setPointsTest] = useState([0,0,0,0,0,0,0,0]);
  const TheMostVote = () =>{
    let hlp = 0;
    for(let i = 0; i < pointsTest.length;i++){
      if(pointsTest[i] > pointsTest[hlp]){
          hlp = i;
      }
    }
    return hlp;
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
       has {pointsTest[selected]} votes.
      </p>
      <p>
        <button onClick={()=>setSelected(Math.round(Math.random()*7))}>next anecdotes</button>
        <button onClick={()=>{const hlp = [...pointsTest];hlp[selected] += 1; setPointsTest(hlp)}}>vote</button>
      </p>
      <h1>Ancedote with the most votes</h1>
      <p>
        {anecdotes[TheMostVote()]}
      </p>
    </div>
  )
}

export default App