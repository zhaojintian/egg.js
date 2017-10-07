module.exports = app => {
  require('./route/articles')(app)
  require('./route/apis/v1/articles')(app)
}
