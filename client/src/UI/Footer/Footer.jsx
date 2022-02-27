import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { ImHome } from "react-icons/im";

export default function Footer() {
  return (
    <div className={classes.footer}>
      Footer
      <Link to="/users/profile">Profile</Link>
      <Link className={classes.home} to="/">
        <ImHome />
      </Link>
    </div>
  );
}
