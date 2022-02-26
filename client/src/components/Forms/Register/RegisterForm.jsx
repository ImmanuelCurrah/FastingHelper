import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../services/routes/UserRoutes/userRoutes";

export default function RegisterForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = props;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await createUser(formData);

    if (!user) {
      if (formData.name === "" || formData.email === "") {
        setErrorMessage("Please fill out the appropriate fields");
      } else {
        setErrorMessage(
          "Could not create User, username or email is already taken"
        );
      }
    } else {
      setCurrentUser(user);
      navigate("/");
    }
  };

  return (
    <div>
      {formData.password === "" ? (
        <div>Please fill out form</div>
      ) : formData.password.length < 6 ? (
        <div>Password must be 6 characters long</div>
      ) : (
        <div>Valid!</div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
      <br />
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
