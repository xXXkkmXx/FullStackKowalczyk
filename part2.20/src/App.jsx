import axios from 'axios'
import { useEffect,useState } from 'react';
import OnSearch from './OnSearch';

const URL = `https://studies.cs.helsinki.fi/restcountries/api/all`;

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
