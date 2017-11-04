module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.Sequelize

  return app.model.define('categories', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    parent_id: {
      type: INTEGER(8),
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    description: {
      type: TEXT('tiny'),
    },
    order: {
      type: INTEGER(8),
      allowNull: true
    }
  })
}