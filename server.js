const express = require('express');
const db = require('./db')

let ejs = require('ejs');
const PORT = 9000;
const userModel = require('./message')

let app = express()
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
db.connexion();
// app.get('/',(req,res)=>{
// res.send("hello")
// })
app.get("/", (req, res) => {
 userModel.find({}, (err, result)=>{
    if(err) throw err;
    res.render('view.ejs', {result : result})
    // res.status(200).send(result)
 });
})


app.listen(PORT,(req,res)=>{
    console.log(`app listening on port:${PORT}`);
})