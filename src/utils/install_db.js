const r = require('./r');

const tablesToCreate = [
  'Thread',
  'ThreadUserXREF',
  'User',
  'Message',
];

const createTable = (index = 0) => {
  if (index < tablesToCreate.length) {
    const tableName = tablesToCreate[index];
    console.log('Creating table', tableName, '...');
    r.tableCreate(tableName)
      .run()
      .then(() => {
        console.log(tableName, 'created!');
        createTable(index+1);
      })
      .error(err => {
        console.log('Error while creating table', tableName, ':', err);
        process.exit(1);
      });
  } else {
    process.exit(0);
  }
};
createTable();
