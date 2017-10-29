module.exports = app => {
  require('./route/articles')(app)
  require('./route/apis/articles')(app)
  require('./route/apis/actions/login')(app)
}
