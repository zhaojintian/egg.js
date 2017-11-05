module.exports = app => {
  const {INTEGER} = app.Sequelize
  const db = require('../../util/db')(app)
  const {SHORT_ID, USERNAME, PASSWORD, RANK} = db.column

  return app.model.define('managers', {
    id: SHORT_ID,
    username: USERNAME,
    password: PASSWORD,
    rank: RANK,
    status: {
      type: INTEGER(1),
      isIn: [[0, 1]],
      allowNull: true
    }
  })
}