module.exports.init=function()
{
  const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root%401234@cluster0.8w5kds9.mongodb.net/ecommerce?retryWrites=true&w=majority')


.then(function()            
{
  console.log("mongo is connected")
})
.catch(function(err)
{
  console.log(err+"error ocuured")
})
}
