const r = require('./r');
const seeds = require('./seeds');

let seedsIndexes = [];

for (var seed in seeds) {
  if (seeds[seed]) {
    seedsIndexes.push(seed);
  }
}

const feedTable = (index = 0) => {
  if (index < seedsIndexes.length) {
    const tableName = seedsIndexes[index];
    const values = seeds[tableName];
    console.log('Feeding table', tableName, '...');
    r.table(tableName)
      .insert(values)
      .run()
      .then(() => {
        console.log(tableName, 'fed!');
        feedTable(index+1);
      })
      .error(err => {
        console.log('Error while feeding table', tableName, ':', err);
        process.exit(1);
      });
  } else {
    process.exit(0);
  }
};
feedTable();
