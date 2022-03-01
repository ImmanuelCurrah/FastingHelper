import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.navbar}>
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
