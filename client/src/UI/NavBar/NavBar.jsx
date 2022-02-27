import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.navbar}>
      <Link to="/">Home</Link>
    </div>
  );
}
