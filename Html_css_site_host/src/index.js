const express = require('express');
const app  = express();
const path = require('path');

console.log(path.join(__dirname,'../public'));

const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));

app.get('/',(req,res)=>{
     res.send("welcome the lalfdkjaldkjflsjdfsdjlsdjfisljdflksjf");
})
app.listen(8000,()=>{
     console.log("server Connected at http://localhost:8000");
})