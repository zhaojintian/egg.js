/**
 * 分页大小
 * @type {number}
 */
const PAGE_SIZE = 10

/**
 * MD5 盐值
 * @type {string}
 */
const MD5_SALT = '123456'

/**
 * JSON Web Tokens 密钥
 * @type {string}
 */
const JWT_SECRET = '123456'

/**
 * 数据库
 * @type {Object}
 */
const DATABASE = {
  database: 'hzzww0n',
  host: 'wvort936.669.dnstoo.com',
  port: '4024',
  username: 'hzzww0n_f',
  password: 'aaaaaa111111'
}

module.exports = {
  PAGE_SIZE,
  MD5_SALT,
  JWT_SECRET,
  DATABASE
}
