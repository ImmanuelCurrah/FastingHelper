import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateUserForm(props) {
  const { userInfo, editUser } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [user, setUser] = useState({ name, email, password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(id, user);
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigate("/users/profile");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <br />
      <input type="text" id="name" value={user.name} onChange={handleChange} />
      <br />
      <label>Email</label>
      <br />
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <div>Please enter password to update</div>
      <button>Submit</button>
    </form>
  );
}
