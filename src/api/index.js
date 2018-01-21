const baseURL = "http://localhost:3000";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const post = (endpoint, params) => {
  return fetch(`${baseURL}/${endpoint}`, {
    headers,
    method: "POST",
    body: JSON.stringify(params)
  }).then(res => res.json());
};

const get = () => (endpoint, params) => {
  return fetch(`${baseURL}/${endpoint}`).then(res => res.json());
};

export const loginUser = user_params => {
  return post("login", user_params);
};

export const fetchCurrentUser = () => {
  return post("fetch_current_user", { token: localStorage.getItem("token") });
};
