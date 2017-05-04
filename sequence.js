const fetch = require('node-fetch');
const BASE_URL = 'https://api.github.com/users';

class GithubUser {
    async fetchGitHubUser(handle) {
        const response = await fetch(`${BASE_URL}/${handle}`);
        const body =  await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    }

    async fetchGitHubRepos(handle) {
        const response = await fetch(`${BASE_URL}/${handle}/repos`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    }
}

(async () => {
    const github = new GithubUser();

    try {
        const user = await github.fetchGitHubUser('zhentian-wan');
        const repos = await github.fetchGitHubRepos('zhentian-wan');
        console.log(user);
        console.log(repos);
    } catch(err) {
        console.error(err);
    }


})();

