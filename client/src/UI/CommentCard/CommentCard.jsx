import classes from "./CommentCard.module.css";

export default function CommentCard(props) {
  return <div className={classes.comment_card}>{props.children}</div>;
}
