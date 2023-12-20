const {Flight} = require('../models/index');

class FlightRepo{
    async createFlight(data){
        try{
            const flight=await Flight.create(data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }
}

module.exports=FlightRepo;