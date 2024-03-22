
// const express = require("express");


// const app = express();

// const port = 3000;


// app.get('/', (req,res) => {

//     res.send('Hello World');
// })


// app.post('backend-api/conversation', function(req,res){

//   res.send("Hii");
    
// })



// app.listen(port,()=> {

//     console.log(` We are listeing at ${port}`);
// })


const express = require('express')

const app = express()

const port = 3000

app.get("/app-router", function(req,res){

  res.json ({
     name: "Abhi",
     age: 21
  })
})


app.get('/', (req,res) =>{

  res.send("Hello World")
})


app.listen(port, () =>{

  console.log(`This app is running at ${port}`)
})












