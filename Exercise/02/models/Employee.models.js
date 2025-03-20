const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        default: "unknown"
    },
    salary:{
        type: Number,
    },
    language: String,
    city: String,
    isManager: Boolean,
})

const Employee = mongoose.model("Employee", EmployeeSchema)
module.exports = Employee