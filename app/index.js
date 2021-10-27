const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const exampleRoute = require('./routes/example')

app.use('/api', exampleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})