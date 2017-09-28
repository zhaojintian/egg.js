exports.index = async function (ctx) {
  ctx.status = 200

  ctx.body = {
    items: [{
      id: 1,
      title: 'jQuery'
    }, {
      id: 2,
      title: 'Vue'
    }],
    debug: {
      queries: ctx.request.queries
    }
  }
}

exports.create = async function (ctx) {
  ctx.status = 201

  ctx.body = {
    id: 1,
    debug: {
      data: ctx.request.body
    }
  }
}

exports.update = async function (ctx) {
  // ctx.status = 204

  ctx.body = {
    debug: {
      data: ctx.params
    }
  }
}