import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { usePathWay } from "../../hooks/usePathWay";
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
  const { pathway, setPathway } = usePathWay();

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
    <Layout path={pathway}>
      <Routes>
        <Route
          path="/"
          element={
            <CurrentUserPosts
              removePost={removePost}
              currentUser={currentUser}
              posts={singleUserPosts}
              editPost={editPost}
              setPathway={setPathway}
            />
          }
        />
        <Route path="new" element={<CreatePost setPathway={setPathway} />} />
        <Route
          path=":id/edit"
          element={<EditPostPage setPathway={setPathway} />}
        />
      </Routes>
    </Layout>
  );
}
