module.exports = app => {
  const {STRING, INTEGER} = app.Sequelize
  const db = require('../../util/db')(app)
  const {TITLE, DESCRIPTION, TELEPHONE, CELLPHONE, EMAIL, ADDRESS, POSTCODE} = db.column

  return app.model.define('settings', {
    id: {
      type: INTEGER(3),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: TITLE,
    keywords: {
      type: STRING(200),
      allowNull: true
    },
    description: DESCRIPTION,
    telephone: TELEPHONE,
    cellphone: CELLPHONE,
    email: EMAIL,
    address: ADDRESS,
    postcode: POSTCODE
  })
}