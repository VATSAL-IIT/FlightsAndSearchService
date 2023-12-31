const {City} =  require('../models/index');
const {Op} = require('sequelize');

class CityRepo{
    async  createCity(name){
        try{
            const city= await City.create({
                name : name
            });
            return city;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }

    async  deleteCity(id){
        try{
            await City.destroy({
                where:{
                    id:id
                }
            })
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }

    async updateCity({id,data}){
        try{
            const city = await City.update(data,{
                where:{
                    id:id
                }
            })
            return city;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }

    async getCity(id){
        try{
            const city = await City.findOne({
                where:{
                    id:id
                }
            })
            return city;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }

    async getAllCities(filter){
        console.log(filter);
        try{
            if(filter){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return cities;
            }
            const cities= await City.findAll()
            return cities;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }
}

module.exports = CityRepo;
