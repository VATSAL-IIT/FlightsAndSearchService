const { CityService} = require('../services/index');
const {ServerErrorCodes,successCodes} = require('../utils/error-codes')
const cityService= new CityService();

//POST -> /city
const create = async (req,res)=>{
    try{
        const city = await cityService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            error:{}
        });
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to create city",
            error:error
        })
    }
}


//DELETE -> /city/:id
const destroy = async (req,res)=>{
    try{
        const city = await cityService.delete(req.params.id);
        return res.status(successCodes.OK).json({
            data: city,
            success: true,
            message:" Successfull deleted the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            error:error
        })
    }
}


//GET ->  /city/:id
const get = async(req,res)=>{
    try{
        const city = await cityService.get(req.params.id);
        // console.log(req.params.id);
        return res.status(successCodes.OK).json({
            data: city,
            success: true,
            message:" Successfull retreived the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to retreive city",
            error:error
        })
    }

}

//PUT ->  /city/:id
const update = async(req,res)=>{
    try{
        const city = await cityService.update(req.params.id,req.body);
        return res.status(successCodes.OK).json({
            data: city,
            success: true,
            message:" Successfull updated the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            error:error
        })
    }
}

const getAll = async(req,res) =>{
    try{
        const cities = await cityService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: cities,
            success: true,
            message:" Successfull retreived all the cities. ",
            error:{}
        })
    }
    catch(error){
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to retreive all cities.",
            error:error
        })
    }
}


module.exports={create,update,destroy,get,getAll}