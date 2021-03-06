module.exports = {
  redis: {
    options: {
      // port: 6379,
      path: '/home/forexfor/redis.sock' // for unix socket
    }
  },
  nodemailer: {
    options: {
      service: 'Gmail',
      auth: {
        user: 'spectrevuln@gmail.com',
        pass: '091013gs'
      }
    }
  }
}