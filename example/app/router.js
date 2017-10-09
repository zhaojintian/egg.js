module.exports = app => {
  require('./route/articles')(app)
  require('./')

  // 以下只是个示例
  require('./route/apis/v1/articles')(app)
}
