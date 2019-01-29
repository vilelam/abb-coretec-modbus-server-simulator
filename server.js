let modbus = require("jsmodbus");
let net = require("net");
let netServer = new net.Server();
let server = new modbus.server.TCP(netServer);
let logger = require('./logger/logger');


server.on("connection", function(client) {
  logger.writeLog('info',"New Connection to the Server");
 // console.log("New Connection");
});

server.on("postWriteMultipleRegisters", (request, cb) =>{
  logger.writeLog('info',"New Connection to the Server");
 //console.log(request.body);
});

//run the server with the desired port number as an argument.
//example: node server.js 502
let port = process.argv[2] || 8502;
netServer.listen(port);
//console.log('Modbus server is listening to port: '+port);

netServer.on("listening", () => {
  logger.writeLog('info', 'Modbus server listening to: ' + port);
});
