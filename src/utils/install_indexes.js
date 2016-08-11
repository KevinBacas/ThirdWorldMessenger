const r = require('./r');

const indexesToCreate = [
  {
    tableName: 'Message',
    indexName: 'FK_Thread_ID',
  },
];

r.table("Message")
  .indexCreate("FK_Thread_ID")
  .run()
  .then(d => console.log(d))
  .error(e => console.error(e));
