module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.Sequelize

  return app.model.define('articles', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: STRING(100),
      allowNull: false
    },
    keywords: {
      type: STRING(200),
      allowNull: true
    },
    description: {
      type: STRING(500),
    },
    telephone: {
      type: STRING(50),
      allowNull: true
    },
    cellphone: {
      type: STRING(50),
      allowNull: true
    },
    email: {
      type: STRING(100),
      allowNull: true
    },
    address: {
      type: STRING(100),
      allowNull: true
    },
    postcode: {
      type: STRING(50),
      allowNull: true
    }
  })
}