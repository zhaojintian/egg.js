module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506425399239_2687'

  // add your config here
  config.middleware = []

  // rest
  config.rest = {
    urlprefix: '/apis/',
    authRequest: null,
    authIgnores: null
  }

  config.security = {
    ignore: '/apis/'
  }

  return config
}