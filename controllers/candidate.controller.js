const {Candidate, User} = require ('../models')
//const { Op } = require ("sequelize")
//[Op.not]: true, ---> IS NOT TRUE

class CandidateController {

  // Create Candidate


  async createCandidate (careRequest_Id, id) {
    return Candidate.create(careRequest_Id,{where:{id}});
  }
}

let candidateController = new CandidateController();

module.exports = candidateController