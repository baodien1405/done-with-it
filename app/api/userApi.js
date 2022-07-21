import apiClient from "./apiClient";

const userApi = {
  register(userInfo) {
    const url = "/users";
    return apiClient.post(url, userInfo);
  },
};

export default userApi;
