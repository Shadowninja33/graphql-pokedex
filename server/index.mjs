import http from 'node:http';
const port = 8888;
const hostname = '127.0.0.1';
const protocol = 'https';
const target = 'pokeapi.co';
const namespace = 'api/v2';

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  const url = `${protocol}://${target}/${namespace}${req.url}`;
  console.log(url);

  try {
    const resp = await fetch(url);

    const body = await resp.json();
    res.statusCode = resp.status;
    res.end(JSON.stringify(body));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;

    res.end(JSON.stringify(error));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ 🎉`);
});
