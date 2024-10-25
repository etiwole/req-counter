"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = require("os");
const app = (0, express_1.default)();
let counter = 0;
const port = 8080;
app.get("/", (req, res) => {
    res.json({
        counter: ++counter,
        hostname: (0, os_1.hostname)(),
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
