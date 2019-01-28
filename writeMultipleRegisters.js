"use strict";

var count = 0;
setInterval(writeMultipleRegisters, 1000);

function writeMultipleRegisters() {
  let simulatedData = require("./data/simulatedData.json");
  let modbus = require("jsmodbus");
  let net = require("net");
  let socket = new net.Socket();
  let options = {
    host: "127.0.0.1",
    port: "49161"
  };
  let logger = require("./logger/logger");
  let client = new modbus.client.TCP(socket);

  if (count === simulatedData.length - 1) {
   count = 0;
  } else {
    count++;
  }

  socket.on("connect", function() {
    var holding = [];
    console.log(count);
    const data = simulatedData[count];
    holding[125] = data["Calculated Ageing"];
    holding[126] = data["Calculated Hotspot"];
    holding[127] = data["Load Ratio"];
    holding[128] = data["Calculated Loss of life"];
    holding[200] = data["Top Oil Temperature"];
    holding[201] = data["Ambient Temperature"];
    holding[202] = data["Transformer Load"];
    client
      .writeMultipleRegisters(125, [
        holding[125],
        holding[126],
        holding[127],
        holding[128]
      ])
      .then(function(resp) {
        client
          .writeMultipleRegisters(200, [
            holding[200],
            holding[201],
            holding[202]
          ])
          .then(function(resp) {
            logger.writeLog("info", resp);
            //   socket.end()
          })
          .catch(function() {
            logger.writeLog("error", "error while writing multiple registers");
            socket.end();
          });
        logger.writeLog("info", resp);
        socket.end();
      })
      .catch(function() {
        logger.writeLog("error", "error while writing multiple registers");
        socket.end();
      });
  });
  socket.on("error", error => {
    logger.writeLog("error", error);
  });
  socket.connect(options);
}
