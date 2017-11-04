const {JWT_SECRET} = require('../util/constant')

module.exports = appInfo => {
  return {
    middleware: [],

    security: {
      csrf: {
        enable: false
      }
    },

    jwt: {
      secret: JWT_SECRET
    },

    i18n: {
      defaultLocale: 'zh-CN',
    }
  }
}