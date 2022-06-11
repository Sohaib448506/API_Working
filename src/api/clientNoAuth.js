import { create } from "apisauce";

const apiClient = (cancelToken) =>
  create({
    baseURL: "https://cae-bootstore.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cancelToken,
  });

export default apiClient;
