// require
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('express.js')
})
app.listen(3000, () => {
  console.log(`3000`)
})