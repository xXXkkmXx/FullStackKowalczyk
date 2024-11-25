import { useState } from "react";
import Statistic from "./Statistic";

const optionArr = ['good','neutral','bad'];

const ButtonFunction = (type,listSets,list) =>{
    switch(type){
        case 'good':
            listSets[0](list[0]+1);
            break;
        case 'neutral':
            listSets[1](list[1]+1);
            break;
        case 'bad':
            listSets[2](list[2]+1);
            break;
    }
}
const ButtonView = ({list,listSets}) =>{
    return(
        optionArr.map((type)=>{
            return <button onClick = {() =>{ButtonFunction(type,listSets,list)}} key={type}>{type}</button>
        })
    )
}

const Button = () =>{ 
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
   let list = [good,neutral,bad];
   let listSets = [setGood,setNeutral,setBad];
   return(
    <>
     <ButtonView list = {list} listSets={listSets}/>
     <Statistic list={list}/>
    </>
   )
}
export default Button;