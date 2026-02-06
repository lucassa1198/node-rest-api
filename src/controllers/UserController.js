const user = require('../mocks/user.js');
const userJson =JSON.stringify(user);
module.exports = {
    getUsers(response){
        response.writeHead(200,
    {'content-type': 'application/json'}
    );
    response.end(userJson); 
    }
}