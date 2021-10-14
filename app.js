const express = require('express')
const mongoose = require('mongoose')

const exphbs = require('express-handlebars')

const Todo = require('./models/todo')

const app = express()

// setting routes
mongoose.connect('mongodb://localhost/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  // get all the Todo data
  Todo.find()
    .lean()
    .then((todos) => res.render('index', { todos }))
    .catch((error) => console.error(error))
})

// listen
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
