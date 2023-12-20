const {FlightService} = require('../services/index')

const flightService=new FlightService();

const create=async (req,res)=>{
    try{
        
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Created successfully',
            error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            error:error
        })
    }
}

module.exports={create};