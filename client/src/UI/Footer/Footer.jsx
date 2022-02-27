import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { ImHome } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsFiles } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Link className={classes.icons} to="/">
        <ImHome className={classes.icon_pic} />
        <div className={classes.links}>Home</div>
      </Link>
      <Link to="/learn" className={classes.icons}>
        <GiGraduateCap />
        <div className={classes.links}>Learn</div>
      </Link>
      <Link to="/discover" className={classes.icons}>
        <BsFiles />
        <div className={classes.links}>Discover</div>
      </Link>
      <Link to="connect" className={classes.icons}>
        <FaGlobeAmericas />
        <div className={classes.links}>Connect</div>
      </Link>
      <Link to="/users/profile" className={classes.icons}>
        <CgProfile />
        <div className={classes.links}>Profile</div>
      </Link>
    </div>
  );
}
