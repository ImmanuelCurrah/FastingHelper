import { useForm } from "../../../../hooks/useForm";
import { createComment } from "../../../../services/routes/CommentRoutes/commentRoutes";

export default function CreateCommentForm(props) {
  const defaultInput = {
    message: "",
  };

  const { postId, setToggle } = props;

  const { handleChange, form, setForm } = useForm(defaultInput);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createComment(postId, form);
    setForm(defaultInput);
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        type="text"
        id="message"
        value={form.message}
        onChange={handleChange}
      />
      <br />
      <button>reply</button>
    </form>
  );
}
