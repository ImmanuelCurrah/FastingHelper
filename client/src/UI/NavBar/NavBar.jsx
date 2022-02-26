import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";
import classes from "./NavBar.module.css";

export default function () {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(async () => {
    const user = await verifyUser();
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className={classes.navbar}>
      {loggedIn === true ? (
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("authToken");
            navigate("/");
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to="/">Log In</Link>
      )}
    </div>
  );
}
