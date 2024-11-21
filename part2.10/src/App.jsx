import { useState } from 'react'

const ShowPersons = ({props}) =>{
  let names = [];
  for(let i = 0;i < props.length;i++){
    names.push(props[i].name);
  }
  return (
    names.map((values) => <h3>{values}</h3>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const AddName = (event) =>{
    event.preventDefaults();
    console.log("button clicked",event.target);
  }   

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddName}>
        <div>
          name: <input/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPersons props={persons}/>
    </div>
  )
}

export default App