const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
     res.send("This is the first express server")
})
app.get('/about',(req,res)=>{
     res.send("<h1>This is a about page</h1>")
})
app.get('/link',(req,res)=>{
     res.send("This is the link  server")
})


app.listen(3000,()=>{
     console.log("server Connected at http://localhost:3000");
})