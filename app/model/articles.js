module.exports = app => {
  const db = require('../../util/db')(app)
  const {ID, SHORT_RELATED_ID, NAME, TITLE, DESCRIPTION, CONTENT, PICTURES, ORDER} = db.column

  return app.model.define('articles', {
    id: ID,
    category_id: SHORT_RELATED_ID,
    author: NAME,
    title: TITLE,
    subtitle: TITLE,
    description: DESCRIPTION,
    content: CONTENT,
    pictures: PICTURES,
    order: ORDER
  })
}