module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
      this.service = this.getService()
    }

    async index () {
      try {
        const data = await this.service.find({id: 2})

        await this.ctx.render('articles', this.$(data), {layout: 'layout'})
      } catch (err) {
        this.ctx.body = err
      }
    }
  }
}
