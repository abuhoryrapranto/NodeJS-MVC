//Controller for the routes

const exampleService = require('../services/ExampleService')
const models = require('../models');

function processAllUser(req, res) {
    exampleService.processAllUser()
    .then(result => res.json({'data':result}));
}

module.exports = {
    processAllUser: processAllUser
}