const {Candidate, User, CareRequest} = require ('../models')


class CandidateController {

  // Create Candidate

  // Quiero crear una candidato si se cumplen las siguiente condiciones:

  // Si el campo sitter, que proviene de la tabla Users es TRUE.

  // Si el campo sitter, es FALSE, tiene que dar error.

  // ({where:{email}, include:[Dog, CareRequest, Candidate]})

  // ({where:{id}, include: [{model: CareRequest, as: 'requests from dog owner'}]});

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
    return Candidate.findOne({where:{id}, include: [{model: CareRequest, as: 'requests from dog owner'}]});
  }


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
