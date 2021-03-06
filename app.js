require('./api/data/db');
require('./api/data/model/user.model');

const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();

app.set('port', 5000);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.use(express.static('public'));

const server = app.listen(app.get('port'), (req, res) => {
    console.log("Server running on port no. " + server.address().port);
});

const io = socket(server);

io.on('connection', socket => {
    console.log('socket connection made ', socket.id);

    socket.on('disconnect', () => console.log('socket disconnected'));

    //Handle chat event
    socket.on('chat', data => {
        console.log("chat data sent from server to sockets : ", data);
        io.sockets.emit('chat', data);
    })

    //Handle typing event
    socket.on('typing', data => socket.broadcast.emit('typing', data));
});