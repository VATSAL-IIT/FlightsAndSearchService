

class CrudService{
    constructor(crudRepo){
        this.crudRepo=crudRepo;
    }

    async create(data){
        try{
            const response= await this.crudRepo.create(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async delete(id){
        try{
            const response= await this.crudRepo.delete(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async update(id,data){
        try{
            console.log(data)
            const response = await this.crudRepo.update(id,data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async get(id){
        try{
            const response = await this.crudRepo.get(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async getAll(){
        try{
            const response = await this.crudRepo.getAll();
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }
}

module.exports= CrudService;