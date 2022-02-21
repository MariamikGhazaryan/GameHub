const api = "http://localhost:3000";
const axios = require("axios");

export const getUser = (path) => {
  return axios.get(`${api}/${path}`);
};

export const login = (path, auth) => {
  return axios
    .post(`${api}/login/${path}`, {
      email: auth.email,
      password: auth.password,
    })
    .then((resp) => {
      return resp.data;
    });
};

export const register = (path, body, auth) => {
  return axios
    .post(
      `${api}/${path}`,
      {
        ...body,
      },
      { auth }
    )
    .then((resp) => {
      return resp;
    });
};

export const update = (path, body, auth) => {
  return axios
    .put(
      `${api}/${path}`,
      {
        ...body,
      },
      { auth }
    )
    .then((resp) => {
      return resp;
    });
};

export const deleteUser = (path) => {
  return axios.delete(`${api}/${path}`);
};
