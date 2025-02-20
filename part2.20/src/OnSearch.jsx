import { useState } from "react";

const Langs = ({langs}) =>{
    return(
        langs.map((item) => <li>{item.values}</li>)
    )
}

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
        console.log(contry.languages);
        return(
         <div>
            <h1>{contry.name.common}</h1>
            <p>capital: {contry.capital}</p>
            <p>area: {contry.area}</p>
            <h2>languages:</h2>
            {/* <Langs langs={contry.languages}/> */}
            <p><img src={contry.flags.png}/></p>
         </div>
        )   
    }
}

export default OnSearch;
