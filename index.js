const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/')  {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!\n');
  }

  if(req.url === '/api/users/1')  {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, John!\n');
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Error\n');
  
});

server.listen(5555, () => {
  console.log('Server is running on port 5555');
});