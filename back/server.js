const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const passwordService = require('./password')
const emailService = require('./email')
const userStore = require('./users')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const middleware = (req, res, next) => {
  const { email, password } = req.body
  !email || !password
    ? res.status(422).json({
        code: 999,
        msg: 'REQUIRED'
      })
    : next()
}

const isValidPayload = (email, password) =>
  emailService.validate(email) && passwordService.isValid(password)

app.post('/register', middleware, (req, res) => {
  const { email, password } = req.body
  if (!isValidPayload(email, password)) {
    return res.status(422).json({
      code: 998,
      msg: 'INVALID'
    })
  }
  userStore.save(email, password)
  return res.json({
    code: 201,
    msg: 'SAVED'
  })
})

app.post('/login', middleware, (req, res) => {
  const { email, password } = req.body
  if (!isValidPayload(email, password)) {
    return res.status(422).json({
      code: 998,
      msg: 'INVALID'
    })
  }
  return userStore.isValidCredentials(email, password)
    ? res.json({
        code: 201,
        msg: 'LOGIN VALID'
      })
    : res.status(401).json({
        code: 997,
        msg: 'INVALID'
      })
})

app.listen(port, () => {
  console.log('Server listen port: ', port)
})
