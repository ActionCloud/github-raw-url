const core = require('@actions/core');
const axios = require('axios');
const githubUrl = core.getInput('github-url');
const githubToken = core.getInput('github-token');

(async () => {
    let rawUrl = '';
    try {
        const [, , , owner, repo,,branch, ...path] = githubUrl.split('/');

        const { data } = await axios({
            url: `https://api.github.com/repos/${owner}/${repo}/contents/${path.join('/')}?ref=${branch}`,
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
            },
        });
        rawUrl = data.download_url;
    } catch (err) {
        rawUrl = githubUrl.replace('//github.com/', '//raw.githubusercontent.com/').replace('/blob/', '/');

    }
    console.log(`::set-output name=raw-url::${rawUrl}`)
})();
