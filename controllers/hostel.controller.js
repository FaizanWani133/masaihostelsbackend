const { Hostel } = require("../models/hostel.model");


async function getAllHostels(req,res){
    // const {gender,location} = req.query;
    // let hostels = [];
    const hostels = await Hostel.find();
    // if(gender){
    //     hostels = await Hostel.find({gender:gender})
    // }else if(gender && location){
    //     hostels = await Hostel.find({gender:gender,location:location})
    // }else{
      
    // }

    return res.status(200).send({
        message:"Success",
        data:hostels
    })  
}

async function addHostel(req,res){
    const hostel = req.body;
    const {user} = req;
    if(user.email.includes('@masaischool.com')){
        hostel.createdBy = user.name
        const hostelData = await Hostel.create(hostel);

       return res.status(200).send({
        message:"Hostel created successfully",
        data:hostelData
       })
    }else{
        return res.status(400).send({
            status: "Error",
            message: "You Should be an Admin",
          });

    }   
}

async function getHostelById(req,res){
    const id = req.params.id;
    console.log(id);
    const hostel = await Hostel.findById(id);
    if(hostel){
        return res.send({message:"Success",data:hostel});
        
    }else{
        return res.status(404).send({message:"Hostel Not Found"})

    }
}
async function deleteHostelById(req,res){
    const {id} = req.params;
    console.log(id);
    const {user} = req;
    if(user.email.includes('@masaischool.com')){
        const hostel = await Hostel.findByIdAndDelete(id);
     if(hostel){
            return res.send({message:"deleted Successfully"});
            
     }else{
            return res.status(404).send({message:"Hostel Not Found"})
    
    }
    }else{
        return res.status(400).send({message:"User Must Be a Administrator"})

    }
    
    
}

module.exports = {
    addHostel,
    getAllHostels,
    getHostelById,
    deleteHostelById
}