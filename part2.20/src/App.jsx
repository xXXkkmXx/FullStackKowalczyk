import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const URL = `https://studies.cs.helsinki.fi/restcountries/api/all`;

const OnSearch = ({countries,name}) => {
  let specificCoun = [];
  countries.map((item)=>{
      if(item.name.common.includes(name) && name != '' && name.length > 1){
        specificCoun.push(item);
      }
  });
  return(
    specificCoun.map((item)=>
      <p key={item.name.common}>{item.name.common} <button onClick={(e)=>{Details(item)}}>show</button></p>
    )
  )
}

const Details = ({detailCountry}) =>{
  return(
    <div>
      <h2>{detailCountry.name.common}</h2>
      <p>capital:{detailCountry.capital}</p>
      <p>area:{detailCountry.area}</p>
      <h3>languages:</h3>
      {
        detailCountry.languages.map(item=><li>{item}</li>)
      }
    </div>
  )
}

function App() {
  const [countries,setCountries] = useState([]);
  const [nameCountry,setNameCountry] = useState('');

  useEffect(()=>{
    axios
    .get(URL)
    .then(response => {
      setCountries(response.data);
    });
  },[]);
  return (
    <>
     find countries: <input type='text'
     onChange={(e)=>{
      setNameCountry(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
     }}
     />
     <OnSearch countries={countries} name={nameCountry}/>
     
    </>
  )
}

export default App
