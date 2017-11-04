const {JWT_SECRET, DATABASE} = require('../util/constant')

module.exports = appInfo => {
  return {
    keys: appInfo.name + '_1506425399239_2687',

    middleware: [],

    security: {
      csrf: {
        enable: false
      }
    },

    jwt: {
      secret: JWT_SECRET
    },

    sequelize: DATABASE,

    i18n: {
      defaultLocale: 'zh-CN',
    }
  }
}