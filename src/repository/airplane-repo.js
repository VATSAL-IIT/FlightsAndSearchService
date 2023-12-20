const {Airplane} = require('../models/index');

class AirplaneRepo{
    async getAirplane(id){
        try{
            const airplane = Airplane.findByPk(id);
            return airplane;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }
}

module.exports=AirplaneRepo;