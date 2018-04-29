// Create your directory and navigate into it
// npm init
// npm install the following:
//        express
//        cors
//        morgan
//        body-parser
//        knex
//        pg
// knex init
// touch in the following files
//        index.js
//        connection.js

//the following code should be added to index.js

const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
//const knex        = require('./connection.js')
const app         = module.exports = express()
const port        = process.env.PORT || 3000

app.get('/',(request,response)=> response.send('success'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

// The following should be inserted in the knexfile.js and may be added to as needed

// module.exports = {

//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/<your database name here>'
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL + '?ssl=true'
//   }

// };

// The following code should be added to the connection.js file

// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')
// const configEnv = config[environment]
// const knex = require('knex')
// const connection = knex(configEnv)

// module.exports = connection

// For migrations and seeds run the following commands

// knex migrate:make < your migration file name here >
// knex seed:make < your seed file name here >

// Set up migrations and seeds. Here is an example of both:

// Migrations

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('beers', (table) => {
//     table.increments()
//     table.text('name')
//     table.text('brewery')
//     table.text('style')
//     table.integer('rating')
//   })
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTableIfExists('beers')
// };

// Seeds


// knex migrate:latest
// knex seed:run