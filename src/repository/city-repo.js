const {City} =  require('../models/index');
class CityRepo{
    async  createCity({name}){
        try{
            const city= await City.create({name})
            return city;
        }
        catch(error){
            console.log(error);
        }
    }

    async  deleteCity(name){
        try{
            await City.deleteCity({name});
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = CityRepo;
