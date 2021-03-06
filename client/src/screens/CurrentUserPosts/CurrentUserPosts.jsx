import React from "react";
import { Card } from "../../exports";

export default function CurrentUserPosts(props) {
  const { posts } = props;

  if (!posts) {
    return "Loading";
  }

  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Card>{post.title}</Card>
        </div>
      ))}
    </div>
  );
}
