"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCommit = void 0;
const express_1 = require("express");
exports.newCommit = (0, express_1.Router)();
exports.newCommit.post('/newCommit', (req, res) => {
    const { totalCommits } = req.body['commits'];
    // let modifiedFiles: Number, addedFiles: Number, removedFiles: Number = 0;
    // let chgMessage: String = '';
    console.log(totalCommits, typeof (totalCommits));
    // console.log(req.body['commits']);
    // totalCommits.forEach( function(commit: Array<githubCommit>) {
    //     console.log(commit)
    // });
});
