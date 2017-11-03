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
      } catch (err) {
        this.response({
          status: 401,
          error: err
        })
      }
    }

    async create () {
      try {
        this.verify()
        await this._create()
      } catch (err) {
        this.response({
          status: 401,
          error: err
        })
      }
    }

    async destroy () {
      try {
        this.verify()
        await this._destroy()
      } catch (err) {
        this.response({
          status: 401,
          error: err
        })
      }
    }

    async update () {
      try {
        this.verify()
        await this._update()
      } catch (err) {
        this.response({
          status: 401,
          error: err
        })
      }
    }
  }
}
