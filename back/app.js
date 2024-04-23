// const express = require("express")
// const bodyParser = require("body-parser")
// const { glob } = require("glob")

// const app = express()

// app.use(bodyParser.json())

// const { Sequelize, DataTypes } = require('sequelize')

// async function loadModels (sequelize) {
//   const modelFiles = await glob('**/src/models/*.js', { ignore: 'node_modules/**' })
//   const models = {}
//   for(const modelFile of modelFiles) {
//     console.trace(modelFile)
//     const loader = require(`../${modelFile}`)
//     const model = loader(sequelize)
//     models[model.name] = model
//   }
//   return models
// }

// async function databaseLoader (req, res, next) {
//   try {
//     const connection = new Sequelize({
//       dialect: 'sqlite',
//       storage: 'database.sqlite'
//     })
    
//     connection.sync()
//     await connection.authenticate()
//     //cargar todos los modelos
//     const models = await loadModels(connection)
//     req.db = {
//       connection,
//       models
//     }
//     console.log("done loading")
//     next({"message": "TESTING!!!"})
//   } catch(ex) {
//     next(ex)
//   }
// }

// app.use(databaseLoader)

// app.get('/', async (req, res) => {
//   console.log("log", req.db.models)
//   const {User} = req.db.models
//   try {
//     const users = await User.findAll()
//     res.json(users)
//   } catch(error) {
//     res.send(error.message)
//   }
// })

// app.post('/', async (req, res) => {
//   try {
//     const user = await User.create(req.body)
//     res.json(user)
//   } catch(error) {
//     console.error(error)
//     res.send(error.message)
//   }
//   // response.send(request.body)
// })

// //--------TEST POSTMAN------

// // route for handling dynamic user IDs
// app.get('/users/:userId', (req, res) => {
//   // Extract the user ID from the URL parameters
//   const userId = req.params.userId;
//   res.send(`Hello Chole, This is User ${userId}!!`);
// })
// // route for handling search with query parameters
// app.get('/search', (req, res) => {
//   // extract the search query from the request's query parameters
//   const query = req.query.q;
//   res.send(`Search Results for: ${query}`);
// })
// //--------TEST POSTMAN------

// app.use((error, req, res, next) => {
//   console.error("Something went super wrong!")
//   console.error(error)
//   res.send("Ooops we are having trouble!")
// })

// const port = 3000

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const axios = require('axios')

app.use(bodyParser.json())

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'chole_db', 
    'postgres', 
    'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  })

const ContactInfo = require('back/src/models/model-form.jsx')(sequelize, DataTypes)

async function getUsers() {
    const contacts = await ContactInfo.findAll()
    console.log(contacts)
}
/* GET contacts listing */
axios.app.get('/', (req, res) => {
    ContactInfo.findAll()
        .then((contacts) => res.json(contacts))
        .catch((error) => res.send(error.message))
})

axios.app.post('/', (req, res) => {
    ContactInfo.create(req.body)
      .then((contacts) => res.json(contacts))
      .catch((error) => res.send(error.message))
})


axios.app.use((error, res) => {
    console.error("Something went super wrong!")
    console.error(error)
    res.send("Ooops we are having trouble!")
  })
  
const port = 3000

app.listen(port, async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log(`Example app listening on port http://localhost:${port}`)
})