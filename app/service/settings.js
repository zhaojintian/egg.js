module.exports = app => {
  return class extends app.Service {
    constructor (ctx) {
      super(ctx)
      
      this.module = 'settings'
    }
  }
}