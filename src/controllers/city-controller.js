const { CityService} = require('../services/index');


const cityService= new CityService();

//POST -> /city
const create = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.body.name);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            error:{}
        });
    }
    catch(error){
        return res.status(500).json({
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
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message:" Successfull deleted the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            error:error
        })
    }
}


//GET ->  /city:id
const get = async(req,res)=>{
    try{
        const city = await cityService.getCity(req.params.id);
        // console.log(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message:" Successfull retreived the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
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
        const city = await cityService.updateCity(req.params.id,req.body.name);
        return res.status(200).json({
            data: city,
            success: true,
            message:" Successfull updated the city. ",
            error:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            error:error
        })
    }
}

module.exports={create,update,destroy,get}