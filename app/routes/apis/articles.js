const consts = require('../../utils/consts')

module.exports = app => {
  app.resources(`${consts.API_PATH}/articles`, `${consts.API_CONTROLLER}.articles.index`)
}