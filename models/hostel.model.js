const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const hostelSchema = new mongoose.Schema(
  {
    name:{type: String,required:true}, 
    location: { type: String, required: true },
    gender:{type:String,required:true,enum:['Male','Female']},
    ratings:{type:Number,required:true},
    totalSeats:{type:Number,required:true},
    price:{type:Number,required:true},
    image:{type:String},
    createdBy:{type:String,required:true},
    description:{type:String,required:true},
    facilities:{type:String,required:true},
    warden:{type:String,required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Hostel = mongoose.model("hostels",hostelSchema);

module.exports = {
    Hostel,
}