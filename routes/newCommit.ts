import {Request, Response, Router} from 'express';
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
    const { totalCommits } = req.body; 
    // let modifiedFiles: Number, addedFiles: Number, removedFiles: Number = 0;
    // let chgMessage: String = '';

    console.log(totalCommits, typeof(totalCommits));

    // totalCommits.forEach( function(commit: Array<githubCommit>) {
    //     console.log(commit)
    // });
});