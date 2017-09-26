module.exports = app => {
  return class HomeController extends app.Controller {
    async index () {
      this.ctx.body = 'hi, egg!!'
    }
  }
}
