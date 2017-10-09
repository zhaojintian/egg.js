module.exports = app => {
  app.resources('/apis/v1/articles', 'apis.v1.articles.index')
  app.resources('/apis/v1/articles/:article_id/authors', `apis.v1.articles.authors`)
}