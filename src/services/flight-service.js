const {FlightRepo, AirplaneRepo} = require('../repository/index');
const compareTime=require('../utils/timeComparator');

class FlightService{

    constructor(){
        this.airplaneRepo = new AirplaneRepo();
        this.flightRepo = new FlightRepo();
    }
    async createFlight(data){
        try{
            if(compareTime(data.arrivalTime,data.departureTime)){
            const airplane = await this.airplaneRepo.getAirplane(data.airplaneId);
            const flight =await this.flightRepo.createFlight({...data,totalSeats:airplane.capacity})
            return flight;
            }
            else
            throw {error: ' arrival-time cant be less than departure-time'}
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error );
        }
    }
}

module.exports=FlightService;
