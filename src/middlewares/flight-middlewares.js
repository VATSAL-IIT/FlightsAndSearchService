const {ClientErrorCodes} = require('../utils/error-codes');

const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalTime ||
        !req.body.departureTime || 
        !req.body.arrivalAirportId || 
        !req.body.departureAirportId  ||
        !req.body.price        
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad request, some parameters are missing in request body."
        })
    }
    next();
}

module.exports={validateCreateFlight};