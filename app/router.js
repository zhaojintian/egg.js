module.exports = app => {
  require('./route/articles')(app)
  require('./route/apis/articles')(app)
}
