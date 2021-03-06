'use strict'

let modbus = require('jsmodbus')
let net = require('net')
let socket = new net.Socket()
let options = {
  'host': '127.0.0.1',
  'port': '8502'
}
let client = new modbus.client.TCP(socket)

socket.on('connect', function () {
  client.readHoldingRegisters(201, 1)
    .then(function (resp) {
      console.log(resp.response._body.valuesAsArray)
      socket.end()
    }).catch(function () {
      console.error(require('util').inspect(arguments, {
        depth: null
      }))
      socket.end()
    })
})

socket.on('error', console.error)
socket.connect(options)
