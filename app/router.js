module.exports = app => {
  require('./routes/articles')(app)
  require('./routes/apis/articles')(app)
}
