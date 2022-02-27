import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.icons}>
        <IoMdNotificationsOutline />
        <BiMessageRounded />
        <AiOutlineSearch />
      </div>
    </div>
  );
}
