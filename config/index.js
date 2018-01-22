// export default {
module.exports = {
  // dbPath: 'mongodb://localhost/graphql'
  mongodb: {
    host: 'mongodb://120.78.64.203:27017',
    database: '/quiz',
    opt: {
      useMongoClient: true,
      autoReconnect: true // 自动重连
    }
  }
}