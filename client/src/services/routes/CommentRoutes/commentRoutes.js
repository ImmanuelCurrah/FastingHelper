import { api } from "../../api/apiConfig.js";
import { errorHandler } from "../../error/errorHandler";

export const fetchPostComments = async (post_id) => {
  try {
    const response = await api.get(`posts/${post_id}/comments`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not get the comments, sorry");
  }
};

export const createComment = async (post_id, commentData) => {
  try {
    const response = await api.post(`posts/${post_id}/comments`, {
      comment: commentData,
    });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not make a comment, sorry");
  }
};

export const updateComment = async (post_id, comment_id, updateData) => {
  try {
    const response = await api.put(`posts/${post_id}/comments/${comment_id}`, {
      comment: updateData,
    });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not update your comment, sorry");
  }
};

export const deletePost = async (post_id, comment_id) => {
  try {
    const response = await api.delete(
      `posts/${post_id}/comments/${comment_id}`
    );
    return response.data;
  } catch (error) {
    errorHandler(error, "could not delete your comment, sorry");
  }
};
