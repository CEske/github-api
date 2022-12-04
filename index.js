"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
const apiPort = process.env.PORT || '3000';
// setup
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
// endpoints
app.use('/', routes_1.routes);
// startup
app.listen(apiPort, () => console.log(`API kører på port ${apiPort}`));
