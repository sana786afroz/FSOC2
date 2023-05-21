const express = require("express");
const cors =require("cors")
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const path = require("path");
const app = express();
const port = 3000;
let arr=[{name:"sana",password:123},{name:"san",password:173},{name:"komal",password:903}]
app.get("/", (req, res) => {
  return res.send("Hello World!");
});
app.get("/about", (req, res) => {
  return res.json({ name: "sana",password:123});
});
app.use(cors({
  origin:"*"
}))
app.post("/login", (req, res) => {
  console.log(req.body,"hiii")
  let userName=req.body.name
  let password=req.body.password
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].name == userName){
     if (arr[i].password == password){
       count=2
     } else{
      count=1
     }
    }
  }
  if(count=2){
    return res.send("your login is successful")
  }else{
    return res.send("its incorrect")
  }
  
  // return res.json({ name: 786 });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
