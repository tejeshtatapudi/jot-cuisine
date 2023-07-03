import http from "../../lib/http";

const getAllFoodApi = async ({ search = null }) => {
  try {
    const response = await http.get("/api/food", {
      params: {
        search: search,
      },
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getAllFoodApi;
