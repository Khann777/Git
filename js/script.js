const API = "https://api.github.com/users/";
const inputSearch = document.querySelector("#search");
const userBlock = document.querySelector(".user");

const getUser = async (event) => {
  event.preventDefault();
  const response = await fetch(API + inputSearch.value);
  const user = await response.json();
  console.log("user: ", user);
  loadCard(user);
};

const loadCard = (user) => {
  createMainCard(user);
};

const createMainCard = (user) => {
  const card = document.createElement("div");
  card.classList.add("card");
  userBlock.appendChild(card);

  const avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = `${user.avatar_url}`;

  const login = document.createElement("span");
  login.classList.add("login");
  login.innerHTML = `<strong>Username:</strong> ${user.login}`;

  const id = document.createElement("span");
  id.classList.add("id");
  id.innerHTML = `<strong>ID:</strong> ${user.id}`;

  const followers = document.createElement("span");
  followers.classList.add("followers");
  followers.innerHTML = `<strong>Followers:</strong> ${user.followers}`;

  const following = document.createElement("span");
  following.classList.add("following");
  following.innerHTML = `<strong>Following:</strong> ${user.following}`;

  const repositories = document.createElement("span");
  repositories.classList.add("repositories");
  repositories.innerHTML = `<strong>Repositories:</strong> ${user.public_repos}`;

  card.appendChild(avatar);
  card.appendChild(login);
  card.appendChild(id);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(repositories);
};
