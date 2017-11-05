module.exports = app => {
  const db = require('../../util/db')(app)
  const {ID, SHORT_RELATED_ID, TITLE, PRICE, DESCRIPTION, CONTENT, STOCK, UNIT, PICTURES} = db.column

  return app.model.define('products', {
    id: ID,
    category_id: SHORT_RELATED_ID,
    title: TITLE,
    price: PRICE,
    description: DESCRIPTION,
    content: CONTENT,
    stock: STOCK,
    unit: UNIT,
    pictures: PICTURES
  })
}