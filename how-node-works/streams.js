const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // solution 1
  fs.readFile('test-file.txt', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});

server.listen(3000, 'localhost', () => {
  console.log(`Server started on 3000`);
});
