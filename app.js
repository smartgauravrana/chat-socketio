const express = require('express');
const socket = require('socket.io');

const app = express();

app.set('port', 3000);

// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

app.use(express.static('public'));

const server = app.listen(app.get('port'), (req, res) => {
    console.log("Server running on port no. " + server.address().port);
});

const io = socket(server);

io.on('connection', socket => {
    console.log('socket connection made ', socket.id);

    //Handle chat event
    socket.on('chat', data => {
        console.log("chat data sent from server to sockets : ", data);
        io.sockets.emit('chat', data);
    })

    //Handle typing event
    socket.on('typing', data => socket.broadcast.emit('typing', data));
});