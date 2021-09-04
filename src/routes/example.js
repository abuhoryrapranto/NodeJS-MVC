const express = require('express')
const app = express()
var router = express.Router()
var exampleController = require('../controllers/ExampleController')

router.get('/', exampleController.getInformation)

const v1Routes = app.use('/v1/auth', router);

module.exports = v1Routes