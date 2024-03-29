import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const ACCESS_TOKEN = Cookies.get("access_token");

  if (ACCESS_TOKEN) {
    config.headers["Authorization"] = "Bearer " + ACCESS_TOKEN;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  async (err) => {
    const REFRESH_TOKEN = Cookies.get("refresh_token");

    const currentRequest = err.response;

    const response = err?.response?.data;

    if (response?.status_code === 401 && response?.error_message === "access_token_expired") {
      const res = await axiosClient.post("/auth/api/relogin", {
        refresh_token: REFRESH_TOKEN,
      });

      Cookies.set("access_token", res.data.access_token);
      Cookies.set("refresh_token", res.data.refresh_token);

      if (res?.status_code === 200) {
        return axiosClient({
          method: currentRequest.config.method,
          url: `${process.env.REACT_APP_BASE_URL}${currentRequest.config.url}`,
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
            "Content-Type": "application/json",
          },
          data: currentRequest.data,
        });
      }
    }

    if (response?.status_code === 401 && response?.error_message === "refresh_token_expired") {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      window.location.href = "/login";
    }

    return Promise.reject(err.response.data);
  }
);

export default axiosClient;
