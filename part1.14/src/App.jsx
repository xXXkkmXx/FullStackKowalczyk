import { useState } from 'react'

const Statistic = ({list}) =>{
  let hlp = list[0] + list[1] + list[2];
  let avrg;
  let positive = list[0]/hlp*100;

  avrg = hlp / list.length;
  if(isNaN(positive)){
    return (
      <p>No feedback given</p>
    )
  }else{
    return(
      <div>
        <p>good {list[0]}</p>
        <p>neutral {list[1]}</p>
        <p>bad {list[2]}</p>
        <p>all {hlp}</p>
        <p>average {avrg}</p>
        <p>positive {positive}%</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let list = [good,neutral,bad];

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistic list={list}/>
    </div>
  )
}

export default App