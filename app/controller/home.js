module.exports = app => {
  return class extends app.Controller {
    async index () {
      this.ctx.body = 'hi, egg!!'
    }
  }
}
