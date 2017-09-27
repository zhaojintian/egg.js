const constants = require('../../utils/constants')

module.exports = app => {
  app.resources(`${constants.API_PATH}/articles`, `${constants.API_CONTROLLER}.articles.index`)
}