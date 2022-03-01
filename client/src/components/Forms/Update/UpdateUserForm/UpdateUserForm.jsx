import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./UpdateUserForm.module.css";

export default function UpdateUserForm(props) {
  //eslint-disable-next-line
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
      <div className={classes.input}>
        {" "}
        <label>Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
      </div>
      <div className={classes.input}>
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input}>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <div>Please enter password to update</div>
      </div>

      <br />

      <button className={classes.button}>Submit</button>
    </form>
  );
}
