const {Dog} = require ('../models');

class DogController {

  // Create Dog by User ID with auth
/*
  async createDog(user_Id, id) {
    return Dog.create(user_Id,{where:{id}});  
  };
*/
  // Get Dog by ID

  async findDog(id){
    return Dog.findOne({where:{id}})
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

  // Create a dog (Trabajando)
  async create(data){
    return Dog.create(data);
  }

}





let dogController = new DogController();
module.exports = dogController;