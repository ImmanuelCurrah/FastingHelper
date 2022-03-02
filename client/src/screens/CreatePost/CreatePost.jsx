import { CreatePostForm } from "../../exports";

export default function CreatePost(props) {
  const { setPathway } = props;
  return (
    <div>
      <h1>Write a Post</h1>
      <CreatePostForm setPathway={setPathway} />
    </div>
  );
}
