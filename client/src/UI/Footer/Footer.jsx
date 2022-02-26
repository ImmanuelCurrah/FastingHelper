import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      Footer
      <Link to="/users/profile">Profile</Link>
    </div>
  );
}
