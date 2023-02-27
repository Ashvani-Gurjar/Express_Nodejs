const express = require('express');
const app  = express();
const requests = require("request")
const path = require('path');
const hbs = require("hbs");

// console.log(path.join(__dirname,'../demo/public'));

// const staticPath = path.join(__dirname,"../demo/public");
// const tempPath = path.join(__dirname,"../demo/templates/veiws")
// const partialPath = path.join(__dirname,"../demo/templates/partials");
// hbs.registerPartials(partialPath)

// app.set("view engine","hbs")
// app.set("views",tempPath)


// app.use(express.static(staticPath));
// app.get("/",(req,res)=>{
//      res.render("index",{
//           challenlname:"Ashvani"
//      })
// })
app.get("/about",(req,res)=>{
     requests(
          `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=e996d0310dc3468151f93ebe3dd6224e`
        )
          .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(`the city is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`)
            res.write(arrData[0].name);
            res.send();
            // console.log(realTimeData);
          })
          .on("end",(err)=>{
               console.log("Error found");
          })
})

app.get('*',(req,res)=>{
     res.render("404",{
          message:"Opps page not found"
     })
})
app.listen(8000,()=>{
     console.log("server Connected at http://localhost:8000");
})