"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
exports.routes = (0, express_1.Router)();
// Importer alle routes
const newCommit_1 = require("./newCommit");
exports.routes.use(newCommit_1.newCommit);
