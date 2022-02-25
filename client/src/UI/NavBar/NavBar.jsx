import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function () {
  const navigate = useNavigate();
  return (
    <div className={classes.navbar}>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem("authToken");
          navigate("/");
        }}
      >
        Logout
      </Link>
    </div>
  );
}
