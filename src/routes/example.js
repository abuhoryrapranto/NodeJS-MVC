const express = require('express')
const app = express()
var router = express.Router()
var exampleController = require('../controllers/ExampleController')

router.get('/', exampleController.processAllUser)

const v1Routes = app.use('/v1/example', router);

module.exports = v1Routes