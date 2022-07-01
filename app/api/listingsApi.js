import apiClient from "./apiClient";

const listingsApi = {
  getListings() {
    const url = "/listings";
    return apiClient.get(url);
  },
};

export default listingsApi;
