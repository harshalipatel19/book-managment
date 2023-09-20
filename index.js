const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 4000;


//convert data in json form
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

//testing route
app.get('/',(req,res)=>{
    res.send("this is tesing route")
})

//router
const bookroute = require('./route/bookroute');   
app.use('/',bookroute); 

app.listen(port,(req,res)=>{
    console.log(`api is running at http://localhost:${port}`);
})