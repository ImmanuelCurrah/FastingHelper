import { useEffect, useState } from "react";
import { fetchPostComments } from "../../services/routes/CommentRoutes/commentRoutes";
import classes from "./Card.module.css";

export default function Card(props) {
  const [postComments, setPostComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const { postId } = props;

  useEffect(() => {
    const getComments = async () => {
      const comments = await fetchPostComments(postId);
      setPostComments(comments);
    };
    getComments();
  }, []);

  return (
    <div className={classes.card}>
      {props.children}
      <div>
        <div className={classes.split}></div>
        {!toggleComments ? (
          <div
            onClick={() => {
              setToggleComments((prevToggle) => !prevToggle);
            }}
            className={classes.toggle_comments}
          >
            show comments
          </div>
        ) : (
          <div
            onClick={() => {
              setToggleComments((prevToggle) => !prevToggle);
            }}
            className={classes.toggle_comments}
          >
            comments:
          </div>
        )}
        {toggleComments && (
          <div>
            {postComments.length > 0
              ? postComments.map((comment) => {
                  return <div key={comment.id}>{comment.message}</div>;
                })
              : "no comments yet"}
          </div>
        )}
      </div>
    </div>
  );
}
