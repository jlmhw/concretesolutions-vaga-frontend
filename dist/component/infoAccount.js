export function fetchUser(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then((request) => request.json())
        .then((response) => {
        if (!response.message) {
            visualizerInfoData(response.login, response.email, response.location, response.avatar_url, response.bio, response.followers, response.following);
        }
        else {
            alert("Not found user in GitHub");
            return;
        }
    })
        .catch((error) => console.error('Error on the find user: ', error));
}
function visualizerInfoData(login, email, location, avatar_url, biography, followers, following) {
    var _a;
    if (email === "" || email === null)
        email = "Email not publicly available";
    if (location === "" || location === null)
        location = "Location not publicity available";
    if (biography === "" || biography === null)
        biography = "No bios available at this time";
    const data = {
        login: login,
        email: email,
        location: location,
        avatar: avatar_url,
        biography: biography,
        followers: followers,
        following: following
    };
    const template = (_a = document.getElementById('template-account-info')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (template) {
        const renderer = Mustache.render(template, data);
        const outputElement = document.getElementById('output-account-info');
        if (outputElement) {
            outputElement.innerHTML = renderer;
        }
    }
}
