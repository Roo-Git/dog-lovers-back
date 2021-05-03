const {Candidate, User} = require ('../models')


class CandidateController {

  // Create Candidate

  // Quiero crear una candidato si se cumplen las siguiente condiciones:

  // Si el campo sitter, que proviene de la tabla Users es TRUE.

  // Si el campo sitter, es FALSE, tiene que dar error.

  async createCandidate (candidacy) {
    let candidate = await User.findOne({where: {id: candidacy.sitter_Id}});

    if(candidate.sitter == true)
      return await Candidate.create(candidacy);
    else
      return {
        error: "Mensaje de Error"
      };
  };
  
  // Get Candidate by ID

  async findCandidate(id){
    return Candidate.findOne({where:{id}})
  }

  // Get Candidate STATUS By ID 

  async getStatusConfirmed(id){
    let deal = await Candidate.findOne({where:{id}})
    if(deal.acceptedByOwner == true)
      return await Candidate.findByPk(id)
    else(deal.acceptedByOwner == false)
      return await Candidate.findByPk(id)
 }

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