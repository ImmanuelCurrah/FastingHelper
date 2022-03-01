import { useEffect } from "react";
import { UpdatePostForm } from "../../exports";

export default function EditPostPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Edit Post</h1>
      <UpdatePostForm />
    </div>
  );
}
