const CrudService = require('./crud-service');
const {FlightRepo, AirplaneRepo} = require('../repository/index');


class FlightService extends CrudService{

    constructor(){
       super(new FlightRepo());
       this.airplaneRepo=new AirplaneRepo();
    }

    async create(data){ 
        try{
            const airplane = await this.airplaneRepo.get(data.airplaneId);
            const flight =await this.crudRepo.create({...data,totalSeats:90});
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error );
        }
    }

    async getAll(data){
        try{
            const response = await this.crudRepo.getAll(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }
}

module.exports=FlightService;
