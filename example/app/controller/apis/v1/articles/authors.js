exports.index = async function (ctx) {
  ctx.body = {
    debug: {
      data: ctx.params
    }
  }
}