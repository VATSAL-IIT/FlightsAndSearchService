const {CityRepo} = require('../repository/index');

class CityService{
    constructor(cityRepo){
        this.cityRepo=new CityRepo();
    }

    async createCity(data){
        try{
            const response= await this.cityRepo.createCity(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async deleteCity(id){
        try{
            const response= await this.cityRepo.deleteCity(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async updateCity(id,data){
        try{
            const response = await this.cityRepo.updateCity({id,data});
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async getCity(id){
        try{
            const response = await this.cityRepo.getCity(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async getAllCities(filter){
        console.log(filter.name);
        try{
            const response = await this.cityRepo.getAllCities({name: filter.name});
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }
}

module.exports= CityService;