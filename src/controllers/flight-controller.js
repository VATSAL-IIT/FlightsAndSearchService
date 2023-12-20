const {FlightService} = require('../services/index')

const flightService=new FlightService();

const create=async (req,res)=>{
    try{
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Created successfully.',
            error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:'Not able to create a flight.',
            error:error
        })
    }
}


const get=async (req,res)=>{
    try{
        const flight=await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Retreived flight successfully.',
            error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:'Not able to  retreive the flight.',
            error:error
        })
    }
}


const getAll=async (req,res)=>{
    try{
        const flights=await flightService.getFlights(req.body);
        return res.status(201).json({
            data:flights,
            success:true,
            message:'Retreived flights successfully.',
            error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:'Not able to retreive the flights.',
            error:error
        })
    }
}

module.exports={create,get,getAll};