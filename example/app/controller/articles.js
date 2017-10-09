module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
      this.service = this.getService()
    }

    async index () {
      const where = {id: 1}

      /*
      this.ctx.body = {
        count: await this.service.getCount({where}),
        items: await this.service.getAll({where})
      }*/

      this.ctx.body = await this.service.getById(1)
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
