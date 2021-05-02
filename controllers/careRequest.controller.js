const {CareRequest, Dog} = require ('../models');
const { Op } = require("sequelize");

class CareRequestController {

  // Create a Request 

  async createRequest(request) {
    let owner_Id = request.owner_Id 
    let dog_Id = request.dog_Id
    // validame el OwnerId donde dogId and userId esten en la misma tabla
    let validateOwner = await Dog.findOne({where: {[Op.and]: [{ id: dog_Id }, { user_Id: owner_Id }]}})
    if(validateOwner != null)
    return await CareRequest.create(request);
    else
    return {
      error: "Mensaje de error"
    }
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