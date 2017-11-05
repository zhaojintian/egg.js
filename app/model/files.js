module.exports = app => {
  const {STRING} = app.Sequelize
  const db = require('../../util/db')(app)
  const {ID, TITLE, MODULE} = db.column

  return app.model.define('files', {
    id: ID,
    title: TITLE,
    type: {
      type: STRING(50),
      allowNull: false
    },
    size: {
      type: STRING(50),
      allowNull: false
    },
    ext: {
      type: STRING(10),
      allowNull: false
    },
    module: MODULE
  })
}