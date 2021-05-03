const {Candidate, User} = require ('../models')


class CandidateController {

  // Create Candidate

  // Quiero crear una candidato si se cumplen las siguiente condiciones:

  // Si el campo sitter, que proviene de la tabla Users es TRUE.

  // Si el campo sitter, es FALSE, tiene que dar error.

  async createCandidate (candidacy) {
    let candidate = await User.findOne({where: {id: candidacy.sitter_Id}})
    console.log(candidate)
    if(candidate.sitter == true)
    return await Candidate.create(candidacy);
    else
    return {
      error: "Mensaje de Error"
    }
  } 
}

let candidateController = new CandidateController();

module.exports = candidateController