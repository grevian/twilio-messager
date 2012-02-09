// Include our User Models
require('./static/users.js');

// Start our http server
var server = require('http').Server();
server.listen(8001)

// Serve our static files through lightnode
var lightnode = require('lightnode')
var website = new lightnode.FileServer(__dirname + '/static/')

website.delegateRequest = function(req, resp) {
    return website;
};

server.addListener('request', function(req, resp) {
    website.receiveRequest(req, resp);
});

// Serve Socket.io requests on the same server
var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  socket.on('ping', function (data) {
       console.log(data);
	});
});

