module.exports = appInfo => {
  const config = exports = {}

  config.middleware = []

  config.security = {
    csrf: {
      enable: false,
    }
  }

  config.view = {
    defaultExtension: '.ejs',
  }

  return config
}