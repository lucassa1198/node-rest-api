const userController = require('./controllers/UserController');


module.exports = [{
    endpoint: '/user',
    handler: userController.getUsers
}];
