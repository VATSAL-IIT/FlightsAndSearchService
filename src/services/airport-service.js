const {AirportRepo} = require('../repository/index');

class AirportService{
    constructor(){
        this.airportRepo=new AirportRepo();
    }

    async createAirport(data){
        try{
            const response= await this.airportRepo.createAirport(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async deleteAirport(id){
        try{
            const response= await this.airportRepo.deleteAirport(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async updateAirport(id,data){
        try{
            const response = await this.airportRepo.updateAirport({id,data});
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async getAirport(id){
        try{
            const response = await this.airportRepo.getAirport(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async getAllAirports(filter){
        try{
            const response = await this.airportRepo.getAllAirports({name: filter.name});
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }
}

module.exports= AirportService;