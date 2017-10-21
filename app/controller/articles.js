module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
      this.service = this.getService()
    }

    async index () {
      this.ctx.body = await this.service.find({id: 2})
      /*
      await this.ctx.render('articles', {
        total: data.count,
        items: data.rows
      }, {
        layout: 'layout'
      })
      */
    }
  }
}
