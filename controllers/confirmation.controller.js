const {Confirmation, Candidate, Dog} = require ('../models');
const { Op } = require("sequelize");

class ConfirmationController {

  // Create Confirmation

  async createConfirmation(confirmation) {
    let user_Id = confirmation.user_Id
    let dog_Id = confirmation.dog_Id
    let candidate_Id = confirmation.candidate_Id
    let validateOwner = await Dog.findOne({where: {[Op.and]: [{ id: dog_Id }, { user_Id: user_Id }]}})
    let validateCandidacy = await Candidate.findOne({where: {id: candidate_Id}})
    if(validateCandidacy || validateOwner != null)
      return await Confirmation.create(confirmation);
      else
      return {
        error: "Mensaje de error"
      }
  };

  // Get Confirmation by ID
  async findConfirmation(id){
    return Confirmation.findOne({where:{id}})
  };

  // Get All Confirmations
  async indexAll(){
    return Confirmation.findAll()
  };

  // Update Confirmation
  async updateConfirmation(update, id) {
    const confirmation = await Confirmation.findOne({where: {id}})
    return await confirmation.update(update);
  }; 


  // Delete Confirmation by ID
  async deleteConfirmation(id) {
    return Confirmation.destroy({where:{id}})
  };
}

let confirmationController = new ConfirmationController();

module.exports = confirmationController;