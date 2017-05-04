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
        /*const userPromise = github.fetchGitHubUser('zhentian-wan');
        const reposPromise = github.fetchGitHubRepos('zhentian-wan');

        const user = await userPromise;
        const repos = await reposPromise;

        console.log(user.name);
        console.log(repos.length);*/

        const [user, repos] = await Promise.all([
                        github.fetchGitHubUser('zhentian-wan'),
                        github.fetchGitHubRepos('zhentian-wan')
                    ]);

        console.log(user.name, repos.length);
    } catch(err) {
        console.error(err);
    }


})();

