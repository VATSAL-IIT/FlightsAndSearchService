const {AirportRepo} = require('../repository/index');
const CrudService = require('./crud-service');

class AirportService extends CrudService{

    constructor(){
        super(new AirportRepo());
    }
    
    async getAll(data){
        try{
            const response = await this.crudRepo.getAll(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer" + error);
        }
    }
}

module.exports= AirportService;