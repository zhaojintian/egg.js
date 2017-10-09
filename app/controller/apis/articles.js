module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
      this.service = this.getService()
    }

    async index () {
      this.ctx.status = 200

      /*

      */
      const {offset = 0, limit = 10, title = ''} = this.ctx.request.query

      this.ctx.body = {
        count: await this.service.getCount({
          offset,
          limit,
          where: {
            title:{
              ''
            }
          }
        }),
        items: await this.service.getAll()
      }
    }
  }
}
