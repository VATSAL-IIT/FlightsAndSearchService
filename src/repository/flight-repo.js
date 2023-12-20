const {Flight} = require('../models/index');
const {Op} = require('sequelize');


class FlightRepo{

    #createFilter(data){
        let filter={};
        if(data.minimumPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minimumPrice}});
        }
        if(data.maximumPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maximumPrice}});
        }
        if(data.minimumPrice && data.maximumPrice){
            Object.assign(filter,{price:{[Op.between]:[data.minimumPrice,data.maximumPrice]}});
        }
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        console.log(filter);
        return filter;
    } 


    async createFlight(data){
        try{
            const flight=await Flight.create(data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }


    async getFlight(id){
        try{
            const flight = await Flight.findOne({
                where:{
                    id:id
                }
            })
            return flight;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }


    async getAllFlights(data){
        try{
            const filterObj=this.#createFilter(data);
            const flights = await Flight.findAll({
                where:filterObj
            });
            return flights;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }

}

module.exports=FlightRepo;