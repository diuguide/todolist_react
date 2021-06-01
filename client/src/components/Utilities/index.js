import axios from "axios";

export const loginApp = (username, password) => {
  axios
    .put("/api/login", { username, password })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export const getTodos = (username) => {
  axios
    .get("/api/getTasks", {
      username,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
