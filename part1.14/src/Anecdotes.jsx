import Selected from "./Select";
import { useState } from "react";

const Anecdote = ({anecdote}) =>{
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
        <>
         <Selected anecdote={anecdote[selected]} point={pointsTest[selected]}/>
        <p>
            <button onClick={()=>setSelected(Math.round(Math.random()*7))}>next anecdotes</button>
            <button onClick={()=>{const hlp = [...pointsTest];hlp[selected] += 1; setPointsTest(hlp)}}>vote</button>
        </p>
        <h1>Ancedote with the most votes</h1>
        <p>
            {anecdote[TheMostVote()]}
        </p>
        </>
    )
}
export default Anecdote;