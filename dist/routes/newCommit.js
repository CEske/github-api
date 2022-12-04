"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCommit = void 0;
const express_1 = require("express");
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
exports.newCommit = (0, express_1.Router)();
dotenv_1.default.config();
exports.newCommit.post('/newCommit', (req, res) => {
    const totalCommits = req.body['commits'];
    let modifiedFiles = 0, addedFiles = 0, removedFiles = 0;
    let chgMessage = '';
    totalCommits.forEach(function (commit) {
        modifiedFiles += commit['modified'].length;
        addedFiles += commit['added'].length;
        removedFiles += commit['removed'].length;
        chgMessage += `• ${commit['message']} by @${commit['committer']['username']}\n`;
    });
    const fields = [
        { name: 'Added files', value: addedFiles.toString(), inline: true },
        { name: 'Modified files', value: modifiedFiles.toString(), inline: true },
        { name: 'Removed files', value: removedFiles.toString(), inline: true },
    ];
    const webhookClient = new discord_js_1.WebhookClient({ url: process.env.WEBHOOK_URL || 'null' });
    const embed = new discord_js_1.EmbedBuilder()
        .setAuthor({ name: process.env.SERVER_NAVN || 'UKENDT', iconURL: process.env.SERVER_LOGO || undefined })
        .setDescription(chgMessage)
        .addFields(fields)
        .setFooter({ text: (new Date()).getDate() + '/' + (new Date()).getMonth() + '/' + (new Date()).getFullYear() });
    webhookClient.send({ embeds: [embed] });
});
