import { useState, useEffect } from "react";
import { loginUser } from "../../../services/routes/UserRoutes/userRoutes";

export default function LoginForm(props) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { setCurrentUser } = props;

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let user = await loginUser(input);
    setCurrentUser(user);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>email</label>
      <br />
      <input
        type="email"
        id="email"
        value={input.email}
        onChange={changeHandler}
      />
      <br />
      <label>password</label>
      <br />
      <input
        type="password"
        id="password"
        value={input.password}
        onChange={changeHandler}
      />
      <button>Login</button>
    </form>
  );
}
