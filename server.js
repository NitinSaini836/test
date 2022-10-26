const express = require('express');
const db = require('./db')
const PORT = 9000;
const userModel = require('./message')


let app = express()


db.init();
app.get('/',(req,res)=>{
res.send("hello")
})
// app.route('/index.js')
// .get((req, res) => {
// {
//     userModel.find().pretty()
// 		.then(function(data)
//     {
//       console.log(data)
//       res.send(data)
    
//     }).catch(function(err)
//     {
			
//      console.log(err)
//     })
//   }
// })
  

app.listen(PORT,(req,res)=>{
    console.log(`app listening on port:${PORT}`);
})