const server = require('./lib/server')
const pkg = require('./package.json')
const PORT = process.env.PORT || 8001
const log = require('./lib/log')

var appzip = require('appmetrics-zipkin')({
    host: '10.0.24.57',
    port: 9401,
    serviceName:pkg.name,
    sampleRate: 1.0
  });

server.listen(PORT, () => {
    log().info(`${pkg.name} is running on ${PORT}` )
})