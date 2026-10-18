const length = (password) => password.length

const isValid = (password) => length(password) >= 5

module.exports = {
  length,
  isValid
}