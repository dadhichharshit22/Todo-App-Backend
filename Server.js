
// Server Instantiate
const express = require('express'); 
const  app = express();

// used to parese req.body in express -> PUT or POST
const bodyParse = require('body-parser');

// specifically parse JSON data & add it to the request.body object 
app.use(bodyParse.json());

// activate the server on 3000 port 
app.listen(3000,()=>{ 
    console.log("Server Started at port no. 3000");
});

// Routes
app.get('/',(request,response)=>{
    response.send("hello jee, kesa ho sarre");
})

app.post('/api/cars',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{useNewurlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("Connection Successfully")})
.catch((error)=>{console.log("Recieved an error")});