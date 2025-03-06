const express = require('express');
const app = express();
const PORT = 3001;

numbers = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.use(express.json())

app.get('/',(request,response)=>{
    response.send("<h1>Hello world</h1>");
})

app.get('/api/persons',(request,response)=>{
    response.json(numbers)
});

app.get('/info',(request,response)=>{
    const body = request.body;
    let numberPeople = 0;
    numbers.map(item=>{
        numberPeople += 1
    })
    response.send(`<h2>${numberPeople}</h2>`)
});

app.listen(PORT,()=>{
    console.log(`\x1b[32mServer is running on port ${PORT}\x1b[00m`);
});
