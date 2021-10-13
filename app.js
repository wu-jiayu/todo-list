const express = require('express')

const app = express()

// setting routes
app.get('/', (req, res) => {
  res.send('hello world!')
})

// listen
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
