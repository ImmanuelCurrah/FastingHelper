import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoMdNotificationsOutline, IoIosArrowBack } from "react-icons/io";

import classes from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={classes.navbar}>
      {window.location.pathname !== "/home" &&
        window.location.pathname !== "/" && (
          <Link className={classes.back} to={`${props.path}`}>
            <IoIosArrowBack />
          </Link>
        )}

      <div className={classes.icons}>
        <div className={classes.navbar_icons}>
          <IoMdNotificationsOutline />
        </div>
        <div className={classes.navbar_icons}>
          <BiMessageRounded />
        </div>
        <div className={classes.navbar_icons}>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}
