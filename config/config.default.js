module.exports = appInfo => {
  const config = exports = {}

  config.middleware = []

  config.security = {
    csrf: {
      enable: false
    }
  }

  return config
}