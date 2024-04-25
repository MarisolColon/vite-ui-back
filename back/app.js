
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const fetch = require('node-fetch')




const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'chole_db', 
    'postgres', 
    'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  })

const ContactInfo = require('../back/src/models/model-form.jsx')(sequelize, DataTypes)
app.use(bodyParser.json())

async function getUsers() {
    const contacts = await ContactInfo.findAll()
    console.log(contacts)
}

const port = 3000
/* GET contacts listing */
app.get('/api/contacts', (req, res) => {
  ContactInfo.findAll()
        .then((contacts) => res.json(contacts))
        .catch((error) => res.send(error.message))
})


app.post('/api/contacts', (req, res) => {
   ContactInfo.create(req.body)
     .then((contacts) => res.json(contacts))
     .catch((error) => res.send(error.message))
})


app.use((error, res) => {
    console.error("Something went super wrong!")
    console.error(error)
    res.send("Ooops we are having trouble!")
  })
  
app.listen(port, async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log(`Example app listening on port http://localhost:${port}`)
})
