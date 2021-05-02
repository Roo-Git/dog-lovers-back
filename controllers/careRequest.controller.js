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


}

let careRequestController = new CareRequestController();

module.exports = careRequestController;