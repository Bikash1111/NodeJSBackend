const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express()

app.use(express.json())

app.get('/get',async (req,resp) =>{

    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
})

app.post('/insert',async (req,res) =>{

    console.log(req.body)

    let data = await dbConnect()
    let result = await data.insertMany(req.body)

    res.send(result)

})

app.put('/update/:name',async (req,res) =>{

    console.log(req.body)
    console.log("request param:"+req.params.name)


    let data = await dbConnect()
    let result = await data.updateOne(
        {Name:req.params.name},
        {$set:req.body}
    )

    res.send(result)

})

app.delete('/delete/:id', async (req,res) => {

    let data = await dbConnect();
    let result = await data.deleteOne(
       { _id: new mongodb.ObjectId(req.params.id)}
    )

    res.send(result)
})


app.listen(5000)