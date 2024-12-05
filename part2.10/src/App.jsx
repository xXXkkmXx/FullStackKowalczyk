import { useState,useEffect } from 'react'
import  axios  from 'axios';

const ShowPersons = ({props,filter}) =>{
  let names;
  if(filter != ''){
     names = [...props.filter(person => person.name.includes(filter))];
  }else{
     names = [...props];
  }
  return (
    names.map((values) => <h3 key={values.name}>{values.name} {values.number} <button onClick={Delete(values.id)}>delete</button></h3>)
  )
} 

const Delete = (id) =>{
  axios.delete('http://localhost:3001/persons',id)
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter,setNewFilter] = useState('');

  const AddName = (event) =>{
    event.preventDefault();
    let Data = {};
    persons.map(person=>{
      if(person.name == newName){
        alert(`${newName} is already added`);
      }else{  
        Data = {name:newName,number:newNumber,id:persons.lastIndexOf.id + 1};
        axios.post('http://localhost:3001/persons',Data)
        .then(response=>{
          setPersons(persons.concat(response.data));
        })  
      }
    });
  }   
  
  useEffect(()=>{
    axios
    .get("http://localhost:3001/persons")
    .then(response =>{
      setPersons(response.data);
    })
  },[])

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with
        <input
          name="filter"
          type="text"
          onChange={(e)=>{
            setNewFilter(e.target.value);
          }} 
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={AddName}>
        <div>
          name: 
          <input
            name="name"
            type="text"
            onChange={(e)=>{
              setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          number:
          <input
          name="number"
          type="text"
          onChange={(e)=>{
            setNewNumber(e.target.value);
          }}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPersons props={persons} filter={newFilter} />
    </div>
  )
}

export default App