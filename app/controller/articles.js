module.exports = app => {
  return class extends app.Controller {
    async index () {
      const data = {
        name: 123456
      }

      await this.ctx.render('articles', data, {
        layout: 'layout'
      })
    }
  }
}
