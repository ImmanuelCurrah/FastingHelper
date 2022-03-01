import { api } from "../../api/apiConfig.js";
import { errorHandler } from "../../error/errorHandler";

export const loginUser = async (loginData) => {
  try {
    const response = await api.post("auth/login", {
      authentication: loginData,
    });
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("username", response.data.user.name);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data.user;
  } catch (error) {
    errorHandler(error, "could not login user, sorry");
  }
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get("auth/verify");
      return response.data;
    }
  } catch (error) {
    errorHandler(error, "could not verify user, sorry");
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("users", { user: userData });
    localStorage.setItem("authToken", response.data.token);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data.user;
  } catch (error) {
    errorHandler(error, "could not create user, sorry");
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await api.get("users");
    return response;
  } catch (error) {
    errorHandler(error, "could not get all users data, sorry");
  }
};

export const fetchUser = async (id) => {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not find that user, sorry");
  }
};

export const updateUser = async (id, updateData) => {
  try {
    const response = await api.put(`users/${id}`, { user: updateData });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not update your information, sorry");
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`user/${id}`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not delete your account, sorry");
  }
};
