import {Request, Response, Router} from 'express';
import { EmbedBuilder } from 'discord.js';
export const newCommit: Router = Router();

interface githubCommit {
    added: Array<String>,
    author: Object,
    committer: Object,
    distinct: Boolean,
    id: String,
    message: String,
    modified: Array<String>,
    removed: Array<String>,
    timestamp: String,
    tree_id: String,
    url: String
}

newCommit.post('/newCommit', (req: Request, res: Response) => {
    const totalCommits: Array<githubCommit> = req.body['commits']; 
    let modifiedFiles: Number, addedFiles: Number, removedFiles: Number = 0;
    let chgMessage: String = '';

    totalCommits.forEach( function(commit: Object) {
        console.log(commit)
    });
});