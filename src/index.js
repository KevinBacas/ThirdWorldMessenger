const restify = require('restify');
const DataStore = require('nedb');

const DataBase = {
  Messages: new DataStore({ filename: './Messages.db', autoload: true }),
};

const server = restify.createServer({
  name: 'ThirdWorldMessenger',
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: true }));

server.get('/', (req, res, next) => {
  res.send('OK');
  return next();
});

server.get('/messages', (req, res, next) => {
  DataBase.Messages.find({}, (err, messages) => {
    if (err) return next(err);
    res.send(messages);
    return next();
  });
});

server.post('/messages', (req, res, next) => {
  if (!req.params.sender || !req.params.message) {
    return next(new restify.InvalidArgumentError("You must provide a sender and a message."));
  }
  const newMessage = {
    sender: req.params.sender,
    message: req.params.message,
  };
  DataBase.Messages.insert(newMessage, (err, createdMessage) => {
    res.send(200, createdMessage);
    return next();
  });
});

const PORT = process.env.THRID_WORLD_PORT || 8080;
server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
