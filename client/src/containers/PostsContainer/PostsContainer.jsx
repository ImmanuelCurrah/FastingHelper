import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  updatePost,
  deletePost,
  fetchSingleUserPosts,
} from "../../services/routes/PostRoutes/postRoutes";
import {
  Layout,
  CurrentUserPosts,
  CreatePost,
  EditPostPage,
} from "../../exports";

export default function PostsContainer(props) {
  const [singleUserPosts, setSingleUserPosts] = useState([]);
  const { currentUser } = props;

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (currentUser) {
        const posts = await fetchSingleUserPosts(currentUser.id);
        setSingleUserPosts(posts);
      } else {
        return "Loading";
      }
    };
    fetchUserPosts();
  }, [currentUser]);

  const editPost = async (id, newData) => {
    await updatePost(id, newData);
  };

  const removePost = async (id) => {
    await deletePost(id);
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <CurrentUserPosts
              removePost={removePost}
              currentUser={currentUser}
              posts={singleUserPosts}
              editPost={editPost}
            />
          }
        />
        <Route path="new" element={<CreatePost />} />
        <Route path=":id/edit" element={<EditPostPage />} />
      </Routes>
    </Layout>
  );
}
