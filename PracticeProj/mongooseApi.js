const express = require('express')
require('./config')
const Employee = require('./employee')

const app = express()

app.use(express.json())

app.post('/create',async (req,res) =>{

    console.log(req.body)
    let data = new Employee(req.body)
    let result = await data.save()

    res.send(result)
})

app.get('/list',async (req,res) =>{

    let result = await Employee.find()

    res.send(result)
})
app.delete('/delete/:_id',async (req,res) =>{

    let result = await Employee.deleteOne(req.params)

    res.send(result)
})

app.put('/update/:_id',async (req,res) =>{

    let result = await Employee.updateOne(
        req.params,
        {$set:req.body}
    )

    res.send(result)
})

// search api 
app.get('/search/:key',async (req,res) =>{

   let result =  await Employee.find(
        {
            "$or":[
                {"Name":{$regex:req.params.key}},
                {"city":{$regex:req.params.key}}

            ]

        }
        
    )

    res.send(result)

})

app.listen(5000)