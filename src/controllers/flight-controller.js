const { FlightService} = require('../services/index');
const {ServerErrorCodes,successCodes} = require('../utils/error-codes')
const flightService= new FlightService();

//POST -> /flight
const create = async (req,res)=>{
    try{
        const flight = await flightService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            error:{}
        });
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to create flight",
            error:error
        })
    }
}


//DELETE -> /flight/:id
const destroy = async (req,res)=>{
    try{
        const flight = await flightService.delete(req.params.id);
        return res.status(successCodes.OK).json({
            data: flight,
            success: true,
            message:" Successfull deleted the flight. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to delete flight",
            error:error
        })
    }
}


//GET ->  /flight/:id
const get = async(req,res)=>{
    try{
        const flight = await flightService.get(req.params.id);
        // console.log(req.params.id);
        return res.status(successCodes.OK).json({
            data: flight,
            success: true,
            message:" Successfull retreived the flight. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to retreive flight",
            error:error
        })
    }

}

//PUT ->  /flight/:id
const update = async(req,res)=>{
    try{
        const flight = await flightService.update(req.params.id,req.body);
        return res.status(successCodes.OK).json({
            data: flight,
            success: true,
            message:" Successfull updated the flight. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to update the flight",
            error:error
        })
    }
}

const getAll = async(req,res) =>{
    try{
        const flights = await flightService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: flights,
            success: true,
            message:" Successfull retreived all the flights. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to retreive all flights.",
            error:error
        })
    }
}


module.exports={create,update,destroy,get,getAll}