const {Candidate, User, CareRequest} = require ('../models')


class CandidateController {

  // Create Candidate

  async createCandidate (candidacy) {
    let candidate = await User.findOne({where: {id: candidacy.sitter_Id}});
    let request = await CareRequest.findOne({where: {id: candidacy.careRequest_Id}})
    console.log(request)

    if(candidate.sitter == true && request != null)
      return await Candidate.create(candidacy);
    else
      return {
        error: "Mensaje de Error"
      };
  };
  
  // Get Candidate ID by careRequest_Id

  async findCandidate(id){
    return Candidate.findOne({where:{careRequest_Id : id}})
      
  };

  // Get Owner Status By ID 

  async getOwnerStatus(id){
    return Candidate.findByPk(id)
  };

  // Get Sitter Status by ID

  async getSitterStatus(id){
    return Candidate.findByPk(id)
  };

  // Index all Candidates

  async indexAll(){
    return Candidate.findAll()
  };

  // Update Candidate by ID 

  async updateCandidate(update, id) {
    const request = await Candidate.findOne({where: {id}})
    return await request.update(update);
  }; 
  
  // Delete Candidate by ID

  async deleteCandidate(id) {
    return Candidate.destroy({where:{id}})
  };
}

let candidateController = new CandidateController();

module.exports = candidateController
