import { Request, Response, Router } from 'express';
import { GithubCommit } from '../types';
import { EmbedBuilder, APIEmbedField, WebhookClient } from 'discord.js';
import dotenv from 'dotenv';
export const newCommit: Router = Router();
dotenv.config();

newCommit.post('/newCommit', (req: Request, res: Response) => {
    const totalCommits: Array<GithubCommit> = req.body['commits']; 
    let modifiedFiles: number = 0, addedFiles: number = 0, removedFiles: number = 0;
    let chgMessage: string = '';

    totalCommits.forEach( function(commit) {
        modifiedFiles += commit['modified'].length;
        addedFiles += commit['added'].length;
        removedFiles += commit['removed'].length;
        chgMessage += `• ${commit['message']} by @${commit['committer']['username']}\n`;
    });

    const fields: APIEmbedField[] = [
        { name: 'Added files', value: addedFiles.toString(), inline: true },
        { name: 'Modified files', value: modifiedFiles.toString(), inline: true },
        { name: 'Removed files', value: removedFiles.toString(), inline: true },
    ]

    const webhookClient = new WebhookClient( { url: process.env.WEBHOOK_URL || 'null' } );
    const embed: EmbedBuilder = new EmbedBuilder()
        .setAuthor({ name: process.env.SERVER_NAVN || 'UKENDT', iconURL: process.env.SERVER_LOGO || undefined })
        .setDescription(chgMessage)
        .addFields(fields)
        .setFooter({ text: (new Date()).getDate() + '/' + (new Date()).getMonth() + '/' + (new Date()).getFullYear() })

    webhookClient.send({ embeds: [embed] });
});