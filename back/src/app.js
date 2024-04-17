import express from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
const port = 3000

import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
})

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
)

sequelize.sync()

async function getUsers() {
  const users = await User.findAll()
  console.log(users)
}


app.get('/', (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((error) => res.send(error.message))
})

app.post('/', (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.send(error.message))
  // response.send(request.body)
})

//--------TEST POSTMAN------

// route for handling dynamic user IDs
app.get('/users/:userId', (req, res) => {
  // Extract the user ID from the URL parameters
  const userId = req.params.userId;
  res.send(`Hello Chole, This is User ${userId}!!`);
})
// route for handling search with query parameters
app.get('/search', (req, res) => {
  // extract the search query from the request's query parameters
  const query = req.query.q;
  res.send(`Search Results for: ${query}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})