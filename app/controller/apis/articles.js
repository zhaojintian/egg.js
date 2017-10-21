module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
    }

    async index () {
      await this._index()
    }

    async show () {
      await this._show()
    }

    async create () {
      await this._create()
    }

    async update () {
      await this._update()
    }

    async destroy () {
      await this._destroy()
    }
  }
}
