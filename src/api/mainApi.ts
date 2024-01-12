import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const getData = (id: any) => {
  return mainApi.get(`/${id}`);
};
