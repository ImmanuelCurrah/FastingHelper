import { api } from "../../config/apiConfig.js";
import { errorHandler } from "../../error/errorHandler";

export const fetchAllPosts = async () => {
  try {
    const response = await api.get("posts");
    return response.data;
  } catch (error) {
    errorHandler(error, "could not find posts, sorry");
  }
};

export const fetchSingleUserPosts = async (user_id) => {
  try {
    const response = await api.get(`users/${user_id}/posts`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not find user, sorry");
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`posts/${id}`);
    return response;
  } catch (error) {
    errorHandler(error, "could not find that post, sorry");
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("posts", { post: postData });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not create that post, sorry");
  }
};

export const updatePost = async (id, updateData) => {
  try {
    const response = await api.put(`posts/${id}`, { post: updateData });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not update that post, sorry");
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`posts/${id}`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not delete that post, sorry");
  }
};
