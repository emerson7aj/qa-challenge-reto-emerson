const users = new Map()

const save = (email, password) => {
  users.set(email, password)
}

const isValidCredentials = (email, password) => users.get(email) === password

module.exports = {
  save,
  isValidCredentials
}
