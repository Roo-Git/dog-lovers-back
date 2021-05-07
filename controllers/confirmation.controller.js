const {Confirmation, Candidate, Dog} = require ('../models');
const { Op } = require("sequelize");

class ConfirmationController {

  // Create Confirmation

  async createConfirmation(confirmation) {
    let user_Id = confirmation.user_Id
    console.log(user_Id, "USER ID")  
    let dog_Id = confirmation.dog_Id
    console.log(user_Id, "DOG ID") 
    let candidate_Id = confirmation.candidate_Id
    console.log(user_Id, "CANDIDATE ID") 

    let validateOwner = await Dog.findOne({where: {[Op.and]: [{ id: dog_Id }, { user_Id: user_Id }]}})
    console.log(validateOwner)
    let validateCandidacy = await Candidate.findOne({where: {id: candidate_Id}})
    console.log(validateCandidacy)
    if(validateCandidacy || validateOwner != null)
    return await Confirmation.create(confirmation);
    else
    return {
      error: "Mensaje de error"
    }
  };

  // Get Confirmation by ID


  // Get All Confirmations


  // Update Confirmation


  // Delete Confirmation by ID
}

let confirmationController = new ConfirmationController();

module.exports = confirmationController;