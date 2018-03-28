var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);
client.send('/paddle-position', 90, function () {
  client.kill();
});