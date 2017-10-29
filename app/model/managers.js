module.exports = app => {
  const {STRING, INTEGER} = app.Sequelize

  return app.model.define('managers', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: STRING(50),
      allowNull: false
    },
    password: {
      type: STRING(50),
      allowNull: false
    },
    rank: {
      type: INTEGER(3),
      allowNull: true
    },
    status: {
      type: INTEGER(1),
      isIn: [[0, 1]],
      allowNull: true
    }
  })
}