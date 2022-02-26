import { useEffect, useState } from "react";
import { fetchAllPosts } from "../../services/routes/PostRoutes/postRoutes";
import { Card } from "../../exports";
import classes from "./Posts.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

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

  return (
    <>
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
              </Card>
              <div className={classes.split}></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
