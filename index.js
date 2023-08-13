const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  // const myURL = new URL(`http://${hostname}:${port}${req.url}`);

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    return res.end();
  }

  res.writeHead(200, {'Content-Type': 'text/html'});

  let fileName;
  if (req.url === '/') {
    fileName = 'index.html';
  } 
  else if (req.url === '/about') {
    fileName = 'about.html';
  }
  else if (req.url === '/contact-me') {
    fileName = 'contact-me.html';
  }
  else {
    fileName = '404.html';
  }

  fs.readFile(fileName, (err, data) => {
    if (err) console.log(err);
    res.write(data);
    return res.end();
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});