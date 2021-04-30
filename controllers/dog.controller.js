const {Dog} = require ('../models');

class DogController {

  // Create Dog by User Id with auth

  async createDog(user_Id, id) {
    return Dog.create(user_Id,{where:{id}});  
  };

  // Get Dog by Id

  async findDog(id){
    return Dog.findOne({where:{id}})
  };


  // Index all Dogs

  async indexAll(){
    return Dog.findAll()
  }

  // Update Dog Profile by Id 

  async updateDogProfile(update, id) {
    const dog = await Dog.findOne({where: {id}})
    return await dog.update(update);
}  

}






let dogController = new DogController();
module.exports = dogController;