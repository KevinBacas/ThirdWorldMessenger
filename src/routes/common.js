module.exports = (server) => {
  server.get('/', (req, res, next) => {
    res.send({ status: 'OK' });
    return next();
  });

  server.get('/ping', (req, res, next) => {
    res.send('pong');
    return next();
  });
};
