const UUID = require('uuid')

module.exports = {
  uuid () {
    return UUID.v1()
  }
}