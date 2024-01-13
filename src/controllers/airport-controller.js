
const { AirportService }  = require('../services/index');
const { ServerErrorCodes, successCodes } = require('../utils/error-codes');


const airportService= new AirportService();

//POST -> /airport
const create = async (req,res)=>{
    try{
        const airport = await airportService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data:airport,
            success:true,
            message:"Successfully created an airport",
            error:{}
        });
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        const airport = await airportService.delete(req.params.id);
        return res.status(successCodes.OK).json({
            data: airport,
            success: true,
            message:" Successfully deleted the airport. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        const airport = await airportService.get(req.params.id);
        // console.log(req.params.id);
        return res.status(successCodes.OK).json({
            data: airport,
            success: true,
            message:" Successfull retreived the airport.",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        const airport = await airportService.update(req.params.id,req.body.name);
        return res.status(successCodes.OK).json({
            data: airport,
            success: true,
            message:" Successfully updated the airport. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to update the airport",
            error:error
        })
    }
}

const getAll = async(req,res) =>{
    try{
        const airports = await airportService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: airports,
            success: true,
            message:" Successfully retreived all the airports. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to retreive all airports.",
            error:error
        })
    }
}




module.exports={create,update,destroy,get,getAll}