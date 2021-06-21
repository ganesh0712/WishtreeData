const mongoose=require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({

        name: {
            type:String,
            required:true,
            minlength:3
        },
        rollno:{
            type:Number,
            required:true,
            unique:[true,"Roll no is alredy present"]  
        },
        email:{
            type:String,
            required:true,
            unique:[true,"Email id is alredy present"],
        
        },
        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true
        }



})

const Student = new mongoose.model("Student",studentSchema);
module.exports = Student;