const restify = require('restify');
const logger = require('restify-logger');
const installCommonRoutes = require('./routes/common');
const installThreadRoutes = require('./routes/thread');

const server = restify.createServer({
  name: 'ThirdWorldMessenger',
});
logger.format('tiny', ':method :url :status :res[content-length] - :response-time ms');
server.use(logger('tiny'));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: true }));

installCommonRoutes(server);
installThreadRoutes(server);

const PORT = process.env.THIRD_WORLD_PORT || 8080;
server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
