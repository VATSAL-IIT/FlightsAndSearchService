const {Airplane} = require('../models/index');
const CrudRepo = require('./crud-repo');

class AirplaneRepo extends CrudRepo{
    constructor(){
        super(Airplane);
    }

    async get(id){
        try{
            const airplane= await Airplane.findAll({
                where:{id}
            });
            return airplane;
        }
        catch(error){       
            console.log("Something wrong in the repo layer "+ error);
        }
    }
}

module.exports=AirplaneRepo;