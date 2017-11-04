const {PAGE_SIZE} = require('../../util/constant')

module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
      this.service = this.getService()
    }

    async index () {
      const {offset} = this.ctx.helper.formatQuery(this.ctx.request.query)
      const total = await this.service.count()
      const items = await this.service.find({offset, limit: PAGE_SIZE})
      await this.ctx.render('page/articles/index', this.$({total, items}), {layout: 'layout/other'})
    }

    async show () {
      try {
        const details = await this.service.find({id: +this.ctx.params.id})
        await this.ctx.render('page/articles/show', this.$({details}), {layout: 'layout/other'})
      } catch (err) {
        this.ctx.body = err
      }
    }
  }
}
