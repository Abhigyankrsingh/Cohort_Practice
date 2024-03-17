
const express = require("express");


const app = express();

const port = 3000;


app.get('/', (req,res) => {

    res.send('Hello World');
})


app.post('backend-api/conversation', function(req,res){

  res.send("Hii");
    
})



app.listen(port,()=> {

    console.log(` We are listeing at ${port}`);
})