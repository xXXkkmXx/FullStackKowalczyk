import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  const [countries,setCountries] = useState([]);

  const OnSearch = () =>{
      countries.map((datas) =>{
        return <h3 key={datas.name.common}>{datas.name.official}</h3>
      })
  }
  useEffect(()=>{
    axios.
    get("https://studies.cs.helsinki.fi/restcountries/api/name/switzerland").
    then(response => {
      setCountries(countries.concat(response.data))
    });
  },[]);
  return (
    <>
     find countries: <input type='text'/>
     <OnSearch/>
    </>
  )
}

export default App
