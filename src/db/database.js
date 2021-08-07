const moongose = require('mongoose');

moongose.connect('mongodb://localhost/data-api',{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connection succesful")
})

module.exports 