module.exports = app => {
  require('./route/articles')(app)
  require('./')
}
