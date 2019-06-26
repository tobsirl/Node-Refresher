const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////////////////////////////////////////////////
// !Files
///////////////////////////////////////////////////////////////////////////////////////////

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File has been written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('Error!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written');
//       });
//     });
//   });
// });

// console.log('Reading file...');

///////////////////////////////////////////////////////////////////////////////////////////
// !Server
///////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('Overview Page');
  } else if (pathName === '/product') {
    res.end('Product Page');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end('<h1>Page Not found!</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on port 3000');
});
