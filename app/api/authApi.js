import apiClient from "./apiClient";

const authApi = {
  login(email, password) {
    const url = "/auth";
    return apiClient.post(url, { email, password });
  },
};

export default authApi;
