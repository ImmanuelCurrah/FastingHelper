import { api } from "../../api/apiConfig";
import { errorHandler } from "../../error/errorHandler";

export const fetchAllProducts = () => {
  try {
    const response = await api.get("posts");
    return response.data;
  } catch (error) {
    errorHandler(error, "could not find posts, sorry");
  }
};

export const getPost = (id) => {
  try {
    const response = api.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not find that post, sorry");
  }
};

export const createPost = (postData) => {
  try {
    const response = api.post("posts", { post: postData });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not create that post, sorry");
  }
};

export const updatePost = (id, updateData) => {
  try {
    const response = await api.put(`posts/${id}`, { post: updateData });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not update that post, sorry");
  }
};

export const deletePost = (id) => {
  try {
    const response = await api.delete(`posts/${id}`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not delete that post, sorry");
  }
};
