const {Airport} = require('../models/index');

class AirportRepo{
    async createAirport(data){
        try{
            const airport=await Airport.create({
                name:data.name,
                address:data.address,
                cityId:data.cityId
            })
            return airport;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }


    async getAirport(name){
        try{
            const airport=await Airport.findAll({
                where:{
                    name:name
                }
            })
            return airport;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async deleteAirport(id){
        try{
            const airport=await Airport.destroy({
                where:{
                    id:id
                }
            })
            return airport;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }


    async updateAirport(id,data){
        try{
            const airport=await Airport.update(data,{
                where:{
                    id:id
                }
            })
            return airport;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async getAllAirports(filter){
        try{
            if(filter){
                const airports=await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return airports;
            }
            const airports= await Airport.findAll()
            return airports;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }
}
module.exports = AirportRepo;