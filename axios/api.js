"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordWebhook = void 0;
const axios_1 = __importDefault(require("axios"));
exports.discordWebhook = axios_1.default.create({
    baseURL: 'https://discord.com/api/webhooks',
    headers: {
        'Content-Type': 'application/json'
    }
});
