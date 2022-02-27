import { useState } from "react";
import classes from "./CreatePostForm.module.css";

export default function CreatePostForm() {
  const [postInput, setPostInput] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPostInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <form>
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
