module.exports = app => {
  app.get('/articles', 'articles.index')
}