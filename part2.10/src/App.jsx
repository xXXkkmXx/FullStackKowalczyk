import { useState } from 'react'

const ShowPersons = ({props}) =>{
  return (
    props.forEach
    ((value)=>{
      <li>{value.name}</li>
    })
  )
}
const AddName = (event) =>{
  event.preventDefaults();
  console.log("button clicked",event.target);
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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