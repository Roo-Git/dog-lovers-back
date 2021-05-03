const {Candidate, User} = require ('../models')
//const { Op } = require ("sequelize")
//[Op.not]: true, ---> IS NOT TRUE

class CandidateController {

  // Create Candidate

  // Quiero crear una candidatura si se cumplen las siguiente condiciones:

  // Si el campo sitter, que proviene de la tabla Users es TRUE.

  // Si el campo sitter, es FALSE, tiene que dar error.

  async createCandidate (careRequest_Id, id) {
    return Candidate.create(careRequest_Id,{where:{id}});
  }
}

let candidateController = new CandidateController();

module.exports = candidateController