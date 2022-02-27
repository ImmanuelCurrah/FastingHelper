import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { getPost } from "../../../../services/routes/PostRoutes/postRoutes";
import { updatePost } from "../../../../services/routes/PostRoutes/postRoutes";

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
      <label>title</label>
      <br />
      <input
        type="text"
        id="title"
        value={form.title}
        onChange={handleChange}
      />
      <br />
      <label>message</label>
      <br />
      <input
        type="text"
        id="message"
        value={form.message}
        onChange={handleChange}
      />
      <br />
      <button>update</button>
    </form>
  );
}
