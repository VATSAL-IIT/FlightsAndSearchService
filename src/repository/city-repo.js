const {City} =  require('../models/index');
const {Op} = require('sequelize');
const CrudRepo = require('./crud-repo');

class CityRepo extends CrudRepo{
    
    constructor(){
        super(City);
    }
    
    async getAll(filter){
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
