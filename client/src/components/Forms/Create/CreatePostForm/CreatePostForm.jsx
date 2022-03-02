import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../../services/routes/PostRoutes/postRoutes";
import classes from "./CreatePostForm.module.css";

export default function CreatePostForm(props) {
  const [postInput, setPostInput] = useState({
    username: localStorage.getItem("username"),
    title: "",
    message: "",
  });

  const navigate = useNavigate();
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/");
    //eslint-disable-next-line
  }, []);

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
      <div className={classes.input}>
        <label>title</label>
        <br />
        <input
          type="text"
          id="title"
          value={postInput.title}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input}>
        <label>message</label>
        <br />
        <textarea
          className={classes.textarea}
          type="text"
          id="message"
          value={postInput.message}
          onChange={handleChange}
        />
      </div>
      <button className={classes.button}>Post</button>
    </form>
  );
}
