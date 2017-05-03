const fetch = require('node-fetch');
const BASE_URL = 'https://api.github.com/users';

class GithubUser {
    async fetchGitHubUser(handle) {
        const response = await fetch(`${BASE_URL}/${handle}`);
        return await response.json();
    }
}

(async () => {
    const github = new GithubUser();
    const user = await github.fetchGitHubUser('zhentian-wan');
    console.log(user);
})();

