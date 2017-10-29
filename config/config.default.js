module.exports = appInfo => {
  return {
    middleware: [],

    security: {
      csrf: {
        enable: false
      }
    },

    jwt: {
      secret: '123456'
    },

    md5Salt: '123456',

    i18n: {
      defaultLocale: 'zh-CN',
    }
  }
}