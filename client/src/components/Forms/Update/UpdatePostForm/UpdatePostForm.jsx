import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../../../../services/routes/PostRoutes/postRoutes";

export default function UpdatePostForm() {
  const [updatedInformation, setUpdatedInformation] = useState({
    title: "",
    message: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedInformation((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, updatedInformation);
    navigate("/");
  };

  return (
    <form>
      <label>title</label>
      <br />
      <input
        type="text"
        id="title"
        value={updatedInformation.title}
        onChange={handleChange}
      />
      <br />
      <label>message</label>
      <br />
      <input
        type="text"
        id="message"
        value={updatedInformation.message}
        onChange={handleChange}
      />
      <br />
      <button>update</button>
    </form>
  );
}
