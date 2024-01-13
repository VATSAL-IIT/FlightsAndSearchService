

class CrudRepo{

    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const modelData=await this.model.create(data);
            return modelData;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async get(id){
        console.log(id);
        try{
            const modelData=await this.model.findOne({
                where:{id}
            });
            return modelData;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async delete(id){
        try{
            const modelData=await this.model.destroy({
                where:{id}
            })
            return modelData;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async update(id,data){
        try{
            const modelData=await this.model.update(data,{
                where:{id}
            })
            return modelData;
        }
        catch(error){
            console.log("Something went wrong in the repository layer "+ error);
        }
    }

    async getAll(){
        try{
            const modelData=await this.model.findAll()
            return modelData;
        }
        catch(error){
            console.log("Something wrong in the repository layer " + error);
        }
    }
}

module.exports = CrudRepo;