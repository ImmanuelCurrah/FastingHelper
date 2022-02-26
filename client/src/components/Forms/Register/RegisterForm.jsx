import { useState } from "react";

export default function RegisterForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setCurrentUser } = props;

  const handleChange = (e) => {};

  return (
    <form>
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
  );
}
