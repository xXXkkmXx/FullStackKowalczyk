import Wheather from "./Wheather";
import { useState } from "react";

const OnSearch = ({countries,name}) => {
    const [contry,setCountry] = useState({});
    const [isClick,newClick] = useState(false);
    let specificCoun = [];
    countries.map((item)=>{
        if((item.name.common.includes(name) || item.name.common.includes(name.toLowerCase()))&& name != '' && name.length > 1){
          specificCoun.push(item);
        }
    });
    if(isClick == false){
        return(
          specificCoun.map((item)=>
            <p key={item.name.common}>{item.name.common} <button onClick={(e)=>{setCountry(item);newClick(true)}}>show</button></p>
          )
        )  
    }else{   
        return(
         <div>
            <h1>{contry.name.common}</h1>
            <p>capital: {contry.capital}</p>
            <p>area: {contry.area}</p>
            <h2>languages:</h2>
            {Object.values(contry.languages || {}).join(' ')}
            <p><img src={contry.flags.png}/></p>
            <h1>Wheather:</h1>
            <Wheather Country={contry}/>
         </div>
        )   
    }
}

export default OnSearch;
