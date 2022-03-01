import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { getPost } from "../../../../services/routes/PostRoutes/postRoutes";
import { updatePost } from "../../../../services/routes/PostRoutes/postRoutes";
import classes from "./UpdatePostForm.module.css";

export default function UpdatePostForm() {
  const defaultInput = {
    title: "",
    message: "",
  };

  useEffect(() => {
    const fetchPostData = async () => {
      const post = await getPost(id);
      defaultInput.title = post.data.title;
      defaultInput.message = post.data.message;
    };
    fetchPostData();
    //eslint-disable-next-line
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const { handleChange, form } = useForm(defaultInput);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, form);
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
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input}>
        <label>message</label>
        <br />
        <textarea
          type="text"
          id="message"
          value={form.message}
          onChange={handleChange}
          className={classes.textarea}
        />
      </div>
      <button className={classes.button}>update</button>
    </form>
  );
}
