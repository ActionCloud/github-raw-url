const core = require('@actions/core');
const githubUrl = core.getInput('github-url');
rawUrl = githubUrl.replace('//github.com/', '//raw.githubusercontent.com/').replace('/blob/', '/')
console.log(`::set-output name=raw-url::${rawUrl}`)
