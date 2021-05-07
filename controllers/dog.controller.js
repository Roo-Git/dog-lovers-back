const {Dog, CareRequest} = require ('../models');

class DogController {

  // Create Dog 

  async createDog(owner) {
    return Dog.create(owner);  
  };

  // Get Dog by ID

  async findDog(id){
    return Dog.findOne({where:{id}, include:[CareRequest]})   // This include is not working.
  };

  // Index all Dogs

  async indexAll(){
    return Dog.findAll()
  }

  // Update Dog Profile by ID 

  async updateDogProfile(update, id) {
    const dog = await Dog.findOne({where: {id}})
    return await dog.update(update);
}  

  // Delete Dog by ID (No auth)

  async deleteDog(id) {
    return Dog.destroy({where:{id}})
  };

}





let dogController = new DogController();
module.exports = dogController;