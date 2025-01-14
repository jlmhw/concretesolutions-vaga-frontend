import { fetchUser } from "./component/infoAccount.js";
import { fetchRepositoryUser } from "./component/repositoriesAccount.js";
let searchUser = document.getElementById('search-user');
searchUser.addEventListener('keydown', (event) => {
    const input = event.target;
    if (event.key === "Enter" && (input === null || input === void 0 ? void 0 : input.value.trim()) !== "" && (input === null || input === void 0 ? void 0 : input.value) !== null) {
        if (input) {
            fetchUser(input === null || input === void 0 ? void 0 : input.value);
            fetchRepositoryUser(input === null || input === void 0 ? void 0 : input.value);
            input.value = "";
        }
    }
});
