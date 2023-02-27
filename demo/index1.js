const express = require('express');
const app  = express();
const path = require("path");
const hbs = require("hbs");
const requests = express("request");

app.get('/',(req,res)=>{
     res.write("This is the first express server ")
     res.write("This is the second express server ")
     res.send();
})

app.get('/about',(req,res)=>{
     console.log("dskfjsjlkdfser ")
     requests(
          `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=e996d0310dc3468151f93ebe3dd6224e`
          )
          .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(`the city is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`)
            res.write(arrData[0].name);
          })
          .on("end",(err)=>{
               console.log("Error found");
          })
})



app.listen(3000,()=>{
     console.log("server Connected at http://localhost:3000");
})