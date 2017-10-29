module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
    }

    async index () {
      try {
        this.verify()
        await this._index()
      } catch (err) {
        this.response({
          status: 401,
          error: err
        })
      }
    }

    async show () {
      try {
        this.verify()
        await this._show()
      } catch (err) {}
    }
  }
}
