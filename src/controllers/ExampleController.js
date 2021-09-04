//Controller for the routes

const exampleService = require('../services/ExampleService')

function getInformation(req, res) {
    let data =  exampleService.getInformation();
    if(!data) return res.status(400).json({'error': 'No data found!'});
    return res.status(200).json({'data': data});
}

module.exports = {
    getInformation: getInformation
}