var express = require("express");
var http = require("http");
var io = require("socket.io");

var app = express();
var server = http.createServer(app);

server.listen(8080);