const {User, Dog, CareRequest, Candidate} = require ('../models');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';




class UserController {

  // Register
  async signUp(user) {
      if(user.password != '')
      user.password = await bcrypt.hash(user.password, 5)
      return User.create(user)
  };


  // Login
  async login(email, password) {
      const user = await User.findOne({where:{email}, include:[Dog, CareRequest, Candidate]})
      if (!user) {
        throw new Error('Email does not exit, please try again.')
      }
      if (!await bcrypt.compare(password, user.password)) {
        throw new Error('The password is incorrect, please try again.')
      }
      const payload = {
        userId: user.id,
        tokenCreationDate: new Date,
      }
      const token = jwt.sign(payload, secret);
      return {user, token}
  };

  // Logout
  async logout(id) {
    return User.findByPk(id)
  }
  // Index All Users
  async indexAll(){
      return User.findAll()
  }

  // Get user Profile by Id
  async findUser(id){
      return User.findOne({where:{id}})
  }
  
  
  // Update User Profile by Id with auth (No password)

  async updateUserProfile(update, id) {
    const user = await User.findOne({where: {id}})
    return await user.update(update);
}

  // Delete User
  async deleteUser(id) {
    return User.destroy({where:{id}})
  };

};

let userController = new UserController();

module.exports = userController;