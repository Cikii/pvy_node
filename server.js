const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('message', (msg, name) => {
      let date_ob = new Date(Date.now());
      let dateout = date_ob.getHours() + ":" + date_ob.getMinutes() + " &nbsp; " + date_ob.getFullYear() + "." + (date_ob.getMonth() + 1) + "." + date_ob.getDate();
      let omsg = JSON.stringify(msg).replace(/\\n/g, "<br>").replace(/"/g, "");
      io.emit('message', omsg, name, dateout);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});