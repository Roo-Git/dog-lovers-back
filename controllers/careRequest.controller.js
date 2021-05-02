const {CareRequest} = require ('../models');

class CareRequestController {

  // Create a Request by user ID

  async createRequest(owner_Id, dog_Id, id) {
    return CareRequest.create(owner_Id, dog_Id, {where:{id}});
  };

  // Get Request by ID

  async findRequest(id){
    return CareRequest.findOne({where:{id}})
  };

  // Index all Request

  async indexAll(){
    return CareRequest.findAll()
  };

  // Update Request Profile by ID 

  async updateRequest(update, id) {
    const request = await CareRequest.findOne({where: {id}})
    return await request.update(update);
  }; 
  
  // Delete Request by ID

  async deleteRequest(id) {
    return CareRequest.destroy({where:{id}})
  };
}

let careRequestController = new CareRequestController();

module.exports = careRequestController;