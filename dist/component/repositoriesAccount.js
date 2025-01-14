export function fetchRepositoryUser(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then((request) => request.json())
        .then((response) => visualizerRepositoriesData(response))
        .then((error) => console.error("Unable to retrieve repositories for this account: ", error));
}
function visualizerRepositoriesData(repositories) {
    var _a;
    const template = (_a = document.getElementById('template-account-repositories')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (template) {
        repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
        const context = {
            repositories: repositories
        };
        const renderer = Mustache.render(template, context);
        const outputElement = document.getElementById("output-repositories-account");
        if (outputElement) {
            outputElement.innerHTML = renderer;
        }
    }
}
