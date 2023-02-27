const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
     res.write("This is the first express server ")
     res.write("This is the second express server ")
     res.send();
})
app.get('/about',(req,res)=>{
     res.write("<h1>This is a about page</h1>")
     res.write("<h1>This is a second page</h1>")
     res.send();
})
app.get('/link',(req,res)=>{
     res.json([
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
          {
          id:1,
          name:"Ashvani"
          },
])
});


app.listen(3000,()=>{
     console.log("server Connected at http://localhost:3000");
})