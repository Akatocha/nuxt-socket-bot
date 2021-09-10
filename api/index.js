const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on('connection', socket => {
  console.log('socket connect');

  io.emit('message', {messageData: 'this is message from server socket to client'})
})

app.get("/", (req, res) => {
  const test = { name: "Foo" };
  res.send(test);
});


// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 4000;
  server.listen(port, () => {
    console.log(`listening on *:${port}`);
  });
}
