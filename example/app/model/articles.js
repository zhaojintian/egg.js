module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.Sequelize

  return app.model.define('articles', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    author: {
      type: STRING(50),
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    subtitle: {
      type: STRING(200),
      allowNull: true
    },
    description: {
      type: TEXT('tiny'),
    },
    content: {
      type: TEXT('long'),
      allowNull: true
    },
    image: {
      type: INTEGER(8),
      allowNull: true
    },
    category_id: {
      type: INTEGER,
      allowNull: true
    }
  })
}