const fs = require('fs');
const csv = require('csv');

const stream = fs.createReadStream('./test.csv').pipe(csv.parse({ delimiter: ';' }));

stream.on('data', (chunk) => {
  console.log(chunk);
});
