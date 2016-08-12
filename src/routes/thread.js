const r = require('../utils/r');

module.exports = (server) => {
  server.get('/thread', (req, res, next) => {
    const authorization = req.header('Authorization', '');
    if (authorization) {
      r.table('ThreadUserXREF')
      .filter({
        FK_User_ID: authorization,
      })
      .eqJoin('FK_Thread_ID', r.table('Thread'))
      .zip()
      .merge(t => ({
        messages: r.table('Message')
                    .getAll(t('id'), { index: 'FK_Thread_ID' })
                    .merge(m => ({
                      sender: r.table('User')
                                .get(m('FK_User_ID'))
                    }))
                    .coerceTo('array')
      }))
      .run()
      .then(threads => {
        res.send(threads);
        return next(null);
      })
      .error(err => next(err));
    } else {
      return next(new restify.UnauthorizedError('You don\'t have access to this thread.'));
    }
  });

  server.get('/thread/:id', (req, res, next) => {
    const id = req.params.id;
    r.table('ThreadUserXREF')
      .filter({
        FK_User_ID: req.header('Authorization', ''),
        FK_Thread_ID: id,
      })
      .count()
      .run()
      .then(c => {
        if (c) {
          r.table('Thread')
            .get(id)
            .merge(t => ({
              messages: r.table('Message')
                          .getAll(t('id'), { index: 'FK_Thread_ID' })
                          .merge(m => ({
                            sender: r.table('User')
                                      .get(m('FK_User_ID'))
                          }))
                          .coerceTo('array')
            }))
            .then(thread => {
              res.send(thread);
              return next(null);
            })
            .error(err => next(err));
        } else {
          return next(new restify.UnauthorizedError('You don\'t have access to this thread.'));
        }
      })
      .error(err => next(err));
  });
};
