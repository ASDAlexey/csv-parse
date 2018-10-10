// https://nodejs.org/download/nightly/v10.0.0-nightly2018033083d44bee01/docs/api/stream.html#stream_readable_asynciterator
// https://habr.com/post/353886/
// https://csv.js.org/transform/examples/
const fs = require('fs');
const csv = require('csv');

const stream = fs.createReadStream('./test.csv', { encoding: 'utf8' })
                 .pipe(csv.parse({ delimiter: ';' }));

async function print(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }

  return 'done';
}

print(stream).then(console.log).catch(console.log);
