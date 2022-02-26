import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await verifyUser();
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
    checkIfLoggedIn();
  }, []);

  return (
    <div className={classes.navbar}>
      <Link to="/">Home</Link>
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
