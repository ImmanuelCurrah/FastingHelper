import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  createPost,
  updatePost,
  deletePost,
  fetchSingleUserPosts,
} from "../../services/routes/PostRoutes/postRoutes";
import { Layout, CurrentUserPosts } from "../../exports";

export default function PostsContainer(props) {
  const [toggle, setToggle] = useState(false);
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
    const post = await updatePost(id, newData);
  };

  const removePost = async (id) => {
    const post = await deletePost(id);
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
      </Routes>
    </Layout>
  );
}
