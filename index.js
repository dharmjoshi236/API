const express = require('express');
const mongoose = require('mongoose')
require('./src/db/database');
const Api = require('./src/models/models');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/',async (req,res)=>{

    try{
          const newdata = await new Api(req.body);
          newdata.save();
          res.status(201).send(req.body);
    }catch{
         res.status(400).send("SOmething went wrong");
    }

})

app.get('/',async (req,res)=>{
    try{
        const sortdata =  {ranking:1}
           const getdata = await Api.find({}).sort(sortdata);
           res.status(200).send(getdata);
    }catch{
        res.status(400).send("SOmething went wrong")
    }
})

app.get('/:id', async (req,res)=>{

    try{
        const id = req.params.id;
        const getsingle = await Api.findById(id);
        res.send(getsingle);

    }catch{

        res.status(400).send("SOmething went wrong")
        
    }
})

app.patch('/:id',async(req,res)=>{

    try{
        const id = req.params.id;
        const update = await Api.findByIdAndUpdate(id,req.body,{new:true})
        res.send(update)


    }catch{
        res.status(400).send("something went wrong")
    }
})

app.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const deleted = await Api.findByIdAndDelete(id);
        res.send(deleted);

    }catch{
        res.send("something went wrong")
    }
})

app.listen(port, ()=>{
    console.log(`application running on the ${port}` )
})