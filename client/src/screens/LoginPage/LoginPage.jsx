import { LoginForm } from "../../exports";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/routes/UserRoutes/userRoutes";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "../../exports";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";

import classes from "./LoginPage.module.css";

export default function LoginPage(props) {
  //eslint-disable-next-line
  const [guest, setGuest] = useState({
    email: "guest@guest.com",
    password: 12345678,
  });
  const { setCurrentUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await verifyUser();
      if (user) {
        navigate("/home");
      } else {
        return;
      }
    };
    checkIfLoggedIn();
    //eslint-disable-next-line
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
      <Link className={classes.link} to="/register">
        Register Here
      </Link>
    </Layout>
  );
}
