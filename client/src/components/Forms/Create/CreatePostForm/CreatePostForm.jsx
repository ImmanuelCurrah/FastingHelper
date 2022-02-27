import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../../services/routes/PostRoutes/postRoutes";
import classes from "./CreatePostForm.module.css";

export default function CreatePostForm() {
  const [postInput, setPostInput] = useState({
    title: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPostInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createPost(postInput);
    setPostInput({ title: "", message: "" });
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>title</label>
      <br />
      <input
        type="text"
        id="title"
        value={postInput.title}
        onChange={handleChange}
      />
      <br />
      <label>message</label>
      <br />
      <textarea
        className={classes.textarea}
        type="text"
        id="message"
        value={postInput.message}
        onChange={handleChange}
      />
      <br />
      <button>Post</button>
    </form>
  );
}
