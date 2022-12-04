import {Request, Response, Router} from 'express';
import { githubCommit } from '../types';
import { EmbedBuilder } from 'discord.js';
export const newCommit: Router = Router();

newCommit.post('/newCommit', (req: Request, res: Response) => {
    const totalCommits: Array<githubCommit> = req.body['commits']; 
    let modifiedFiles: number = 0, addedFiles: Number = 0, removedFiles: Number = 0;
    let chgMessage: String = '';

    totalCommits.forEach( function(commit) {
        modifiedFiles += commit.modified.length;
    });

    console.log(modifiedFiles)
});