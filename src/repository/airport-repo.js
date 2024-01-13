const {Airport} = require('../models/index');
const CrudRepo = require('./crud-repo');
const {Op} = require('sequelize');

class AirportRepo extends CrudRepo{
    
    constructor(){
        super(Airport);
    }

    async getAll(filter){
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
            const airports= await Airport.findAll();
            return airports;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }
}
module.exports = AirportRepo;