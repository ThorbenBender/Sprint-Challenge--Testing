const server = require('./api/server');

server.listen(3333, () => {
    console.log('Server listening to port 3333');
})