const {CityRepo} = require('../repository/index');

class CityService{
    constructor(){
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

    async deleteCity(name){
        try{
            const response= await this.cityRepo.deleteCity(name);
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

    async getCity(){
        try{
            const response = await this.cityRepo.getCity(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }
}

module.exports= CityService;