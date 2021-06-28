const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const knex = require('knex')

const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '12345',
    database : 'GameWebsite'
  }
});



  const app = express();

  app.use(bodyParser.json())
  app.use(cors())

  app.get('/', (req,res) => {
    res.send(database.users);
  })



  app.post('/signin', (req,res) => {
    db.select('username', 'hash').from('login')
    .where('username', '=', req.body.username)
    .then(data => {
      const isTrue = bcrypt.compareSync(req.body.password, data[0].hash)
      if(isTrue) {
        return db.select('*').from ('users')
          .where('username', '=' , req.body.username)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      }
    })
  .catch(err => res.status(400).json('wrong_credentials'))
  })


app.post('/register', (req,res) => {
  const {name, username, password} = req.body
  const hash = bcrypt.hashSync(password)
  db.transaction(trx => {
    trx.insert({
      hash: hash,
      username: username
    })
    .into('login')
    .returning('username')
    .then(loginusername => {
      return trx('users')
      .returning('*')
      .insert({
        name: name,
        username: loginusername[0],
        joined: new Date()
      })
      .then(user => {
        res.json(user[0]);


      })

    })
    .then(trx.commit)
    .catch(trx.rollback)
  })

  .catch(err => res.status(400).json('Unable to register'))

})


app.get('/profile/:id', (req,res) => {
  const {id} = req.params;
  let found = false;
  db.select('*').from('users').where({id})
  .then(user => {
    if (user.length) {
      res.json(user[0])


    } else {
      res.status(400).json('not found')

    }
  })
  .catch(err => res.status(400).json('error getting user'))


})






app.set('port', 3001);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);

})
