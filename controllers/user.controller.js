const {User} = require ('../models');
const bcrypt = require ('bcryptjs');



class UserController {

  // Register User

  async createUser(user) {
    user.password = await bcrypt.hash(user.password, 5)
    return User.create(user)
  };


}

let userController = new UserController();

module.exports = userController;