const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    Name:String,
    Age:Number,
    city:String
},
{ collection: 'employee' }
)

module.exports = mongoose.model('employee',employeeSchema)