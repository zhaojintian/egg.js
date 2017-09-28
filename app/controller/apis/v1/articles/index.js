exports.index = async function (ctx) {
  ctx.body = {
    module: 'articles'
  }
}

exports.create = async function (ctx) {
  ctx.status = 201

  ctx.body = {
    id: 1
  }
}