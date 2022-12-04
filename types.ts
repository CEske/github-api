export interface githubCommit {
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