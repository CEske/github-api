"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCommit = void 0;
const express_1 = require("express");
exports.newCommit = (0, express_1.Router)();
exports.newCommit.post('/newCommit', (req, res) => {
    const totalCommits = req.body['commits'];
    let modifiedFiles, addedFiles, removedFiles = 0;
    let chgMessage = '';
    // totalCommits.forEach( function(commit: Array<githubCommit>) {
    //     console.log(commit)
    // });
});
