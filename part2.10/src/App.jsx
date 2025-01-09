import { useState,useEffect } from 'react'
import  axios  from 'axios';

const URL = 'http://localhost:3001/persons';

const ShowPersons = ({props,filter}) =>{
  let names;
  if(filter != ''){
     names = [...props.filter(person => person.name.includes(filter))];
  }else{
     names = [...props];
  }
  return (
    names.map((values) => <h3 key={values.name}>{values.name} {values.number} <button onClick={(e)=>{Delete(values.id,e)}}>delete</button></h3>)
  )
} 

const Log = ({isFailure,message}) =>{
  let style = {
    background_color:"#EEEEEE",
    color: "",
    display: "none"
  }
  let msgServer;
  if(isFailure == true){
    style.color = "#DD0000";
    msgServer = "Error";
  }else{
    msgServer = "Done";
    style.color = "#00DD00"; 
  }
  return( 
    <div style={style} id="Logger">
      <p>
       {msgServer} {message}
      </p>
    </div>
  )
}

const Delete = async (iD,event) =>{
  event.preventDefault();
  await axios.delete(URL + "/" + iD);
  window.location.reload();
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter,setNewFilter] = useState('');
  const [newFailure,setNewFailure] = useState(false);
  const [newMessage,setNewMessage] = useState('');

  const ShowLog = (message,isFailure) =>{
    setNewFailure(isFailure);
    setNewMessage(message);
    document.getElementById("Logger").style = "display:block";
  }

  const AddName = async (event) =>{
    event.preventDefault();
    
    let exist = false;
    let toFix = false;
    let Data = {name:newName,number:newNumber,id:String(Number(persons.at(-1).id) + 1)};

    persons.map(person=>{
      if(person.name == newName && person.number == newNumber){
        exist = true;
      }else if(person.name == newName && person.number != newNumber){
        toFix = true;
        Data.id = person.id;
      }
    });
    if(exist){
      ShowLog(`${newName} is already added`,true);
    }
    else if(toFix){
      alert(`${newName} is already added.Would you like to edit this?`);
      axios.patch(URL + '/' + Data.id ,Data).then(response=>{
        window.location.reload();
        persons.at(Number(response.data.id)).number = response.data.number;
      });
    }
    else{
      ShowLog('succesfully added new number',false);
      axios.post(URL,Data)
      .then(response=>{
        setPersons(persons.concat(response.data));
      })  
    }
  }   
  
  useEffect(()=>{
    axios
    .get(URL)
    .then(response =>{
      setPersons(response.data);
    })
  },[])
  return (
    <div>
      <Log isFailure={newFailure} message={newMessage}/>
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