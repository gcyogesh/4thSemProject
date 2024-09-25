const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Set the response header (status 200 and content type)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send a response
    res.end('Hello, welcome to the homepage!');
  } else {
    // Handle other routes or send a 404 response for unhandled routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Page not found');
  }
});

const port = 3006;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
