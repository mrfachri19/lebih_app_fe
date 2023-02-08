import axios from "axios";
import CONFIG from "../config";

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => async (data, token) => {
  return await axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

const patch =
  (api) =>
  async (param = "", data) => {
    try {
      return await axios.patch(
        `${fullURL(api)}${param}`,
        data,
        {
          method: "PATCH",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

// ============= auth
export const register = post("auth/register");
export const registerDriver = post("authDriver/registerdriver");
export const login = post("auth/login");
export const loginDriver = post("authDriver/login-driver");

// ============= merchant
export const getListRestaurant = get("merchant")
export const getListRestaurantId = get("merchant")
export const merchantPost = post("merchant")

// ============= menu
export const getmenuIdMerchant = get("menu")
export const PostMenu = post("menu")
// ============= order
export const postOrder = post("order");
export const getAllOrder = get("order");

const API = {
  register,
  registerDriver,
  getListRestaurant,
  getListRestaurantId,
  getmenuIdMerchant,
  merchantPost,
  postOrder,
  getAllOrder,
  PostMenu
};

export default API;
