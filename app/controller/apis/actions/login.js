const {MD5_SALT} = require('../../../util/constant')

module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'managers'
      this.service = this.getService()
    }

    /**
     * 登陆
     * @returns {Promise}
     */
    async create () {
      const {username, password} = this.ctx.request.body
      const res = await this.service.find({
        attributes: ['id', 'username'],
        where: {
          username,
          password: this.ctx.helper.md5(MD5_SALT + password)
        }
      })

      if (res.length) {
        // 签发 token
        this.response({
          status: 200,
          data: {
            manager: {
              id: res[0].id,
              username,
            },
            token: this.sign({
              userInfo: {
                username: res[0].username,
                password: res[0].password
              },
              expiresIn: '30d'
            })
          }
        })
      } else {
        this.response({
          status: 404,
          error: {
            code: 'MANAGERS/DATA_NOT_FOUND',
            message: '账号或密码错误'
          }
        })
      }
    }
  }
}
