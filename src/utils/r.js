const rethinkIP = process.env.RETHINK_IP || '192.168.99.100';
const rethinkPort = process.env.RETHINK_PORT || '28015';
const r = require('rethinkdbdash')({
  port: rethinkPort,
  host: rethinkIP,
  db: 'ThirdWorld',
});

module.exports = r;
