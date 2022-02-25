import { LoginForm } from "../../exports";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/routes/UserRoutes/userRoutes";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../exports";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";

import classes from "./LoginPage.module.css";

export default function LoginPage(props) {
  const [guest, setGuest] = useState({
    email: "immanuel@me.com",
    password: 12345678,
  });
  const { setCurrentUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const user = verifyUser();
    if (user.data) {
      navigate("/home");
    } else {
      return;
    }
  }, []);

  const loginGuest = async () => {
    const user = await loginUser(guest);
    setCurrentUser(user);
    navigate("/home");
  };

  return (
    <Layout>
      <h1>Login</h1>
      <LoginForm setCurrentUser={setCurrentUser} />
      <div className={classes.guest}>
        <div onClick={loginGuest}>continue as a guest</div>
      </div>
    </Layout>
  );
}
