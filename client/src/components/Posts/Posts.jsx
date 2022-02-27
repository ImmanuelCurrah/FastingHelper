import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../../services/routes/PostRoutes/postRoutes";
import { deletePost } from "../../services/routes/PostRoutes/postRoutes";
import { Card } from "../../exports";
import classes from "./Posts.module.css";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const { currentUser } = props;

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetchAllPosts();
      if (posts) {
        setPosts(response);
      } else {
        setPosts(["No posts yet!"]);
        return "Loading...";
      }
    };
    fetchPostData();
    //eslint-disable-next-line
  }, []);

  if (!currentUser) {
    return "Loading...";
  }

  return (
    <div className={classes.posts}>
      <div className={classes.header_container}>
        <div className={classes.header}>For You:</div>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Card>
                <div>{post.title}</div>
                <div>{post.message}</div>
                <div className={classes.post_links_container}>
                  <div className={classes.post_links}>comments</div>
                  {currentUser.id === post.user_id ? (
                    <>
                      <div className={classes.post_links}>
                        <Link
                          className={classes.edit}
                          to={`/posts/${post.id}/edit`}
                        >
                          edit
                        </Link>
                      </div>
                      <div
                        onClick={() => {
                          deletePost(post.id);
                          window.location.reload(false);
                        }}
                        className={classes.post_links}
                      >
                        delete
                      </div>
                    </>
                  ) : null}
                </div>
              </Card>
              <div className={classes.split}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
