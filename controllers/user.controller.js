const {User} = require ('../models');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';



class UserController {

  // User Register
  async signUp(user) {
      user.password = await bcrypt.hash(user.password, 5)
      return User.create(user)
  };


  // User Login
  async login(email, password) {
      const user = await User.findOne({where:{email}})
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
      return jwt.sign(payload, secret);
  };


  // Index All Users
  async indexAll(){
      return User.findAll()
  }
  
  
  // 

};

let userController = new UserController();

module.exports = userController;