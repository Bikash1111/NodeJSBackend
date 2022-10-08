
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employeedb')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const employeeSchema = new mongoose.Schema({
    Name:String,
    Age:Number,
    city:String
},
{ collection: 'employee' }
)

const saveInDB = async () =>{
    const Employee = mongoose.model('employee',employeeSchema)

    let data = new Employee({
        Name:"Rohan",
        Age:22,
        city:"Hydrabad"
    })

    let result = await data.save()

    console.log(result)

}

// saveInDB();  

const updateInDB = async () =>{
    const Employee = mongoose.model('employee',employeeSchema)

let data = await Employee.updateOne(
    {Name:"Balaram"},
    {$set:{Age:55}}
)

    console.log(data)

}

// updateInDB()

const deleteInDB = async () =>{
    const Employee = mongoose.model('employee',employeeSchema)

    let data = await Employee.deleteOne({Name:"Rohan"})


    console.log(data)

}

deleteInDB()

const findInDB = async () =>{
        const Employee = mongoose.model('employee',employeeSchema)
    
    let data = await Employee.find({});

    
        console.log(data)
    
    }

//     findInDB();
