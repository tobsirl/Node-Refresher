const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // solution 1
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // solution 2 - streams
  const readable = fs.createReadStream('test-file.txt');
  readable.on('data', chunk => {
    res.write(chunk);
  });

  readable.on('end', () => {
    res.end();
  });

  readable.on('error', err => {
    console.log(err);
    res.statusCode = 500;
    res.end('File not found!');
  });
});

server.listen(3000, 'localhost', () => {
  console.log(`Server started on 3000`);
});
