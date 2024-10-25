"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var os_1 = require("os");
var app = (0, express_1.default)();
var counter = 0;
var port = 0;
app.get("/", function (req, res) {
    res.json({
        counter: ++counter,
        hostname: (0, os_1.hostname)(),
    });
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
