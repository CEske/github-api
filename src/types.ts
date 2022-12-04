export interface GithubCommit {
    added: Array<string>,
    author: object,
    committer: GithubCommiterObject,
    distinct: boolean,
    id: string,
    message: string,
    modified: Array<string>,
    removed: Array<string>,
    timestamp: string,
    tree_id: string,
    url: string
}

interface GithubCommiterObject {
    date: string,
    email: string,
    name: string,
    username: string
}