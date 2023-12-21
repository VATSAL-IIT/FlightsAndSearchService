const {Flight} = require('../models/index');
const {Op} = require('sequelize');
const CrudRepo = require('./crud-repo');


class FlightRepo extends CrudRepo{

    constructor(){
        super(Flight);
    }
    
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
    
    async getAll(data){
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