
const { AirportService }  = require('../services/index');


const airportService= new AirportService();

//POST -> /airport
const create = async (req,res)=>{
    try{
      
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully created an airport",
            error:{}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create an airport",
            error:error
        })
    }
}

//DELETE -> /airport/:id
const destroy = async (req,res)=>{
    try{
        const airport = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message:" Successfully deleted the airport. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete airport.",
            error:error
        })
    }
}


//GET ->  /airport:id
const get = async(req,res)=>{
    try{
        const airport = await airportService.getAirport(req.params.id);
        // console.log(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message:" Successfull retreived the airport.",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retreive airport",
            error:error
        })
    }

}

//PUT ->  /airport/:id
const update = async(req,res)=>{
    try{
        const airport = await airportService.updateAirport(req.params.id,req.body.name);
        return res.status(200).json({
            data: airport,
            success: true,
            message:" Successfully updated the airport. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the airport",
            error:error
        })
    }
}

const getAll = async(req,res) =>{
    try{
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message:" Successfully retreived all the airports. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retreive all airports.",
            error:error
        })
    }
}




module.exports={create,update,destroy,get,getAll}