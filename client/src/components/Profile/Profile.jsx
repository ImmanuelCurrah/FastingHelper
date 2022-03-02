import { Link } from "react-router-dom";
import classes from "./Profile.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Profile(props) {
  const { currentUser } = props;
  if (!currentUser) {
    return "Loading";
  }

  return (
    <div className={classes.profile}>
      <div className={classes.profile_container}>
        <div className={classes.circle}>{currentUser.name.split("")[0]}</div>
        <div className={classes.profile_name}>
          <div>{currentUser && currentUser.name}</div>
          <Link className={classes.name_link} to={`/users/details`}>
            view your profile
          </Link>
        </div>
      </div>
      <div className={classes.links_container}>
        <div className={classes.profile_link}>
          <div className={classes.link}>Timer</div>
          <Link className={classes.link} to="timer">
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <div className={classes.split}></div>
        <div className={classes.profile_link}>
          <div className={classes.link}>Schedule</div>
          <Link
            className={classes.link}
            to={`/users/${currentUser.id}/profile/schedule`}
          >
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <div className={classes.split}></div>
        <div className={classes.profile_link}>
          <div className={classes.link}>Recent</div>
          <Link
            className={classes.link}
            to={`/users/${currentUser.id}/profile/recent`}
          >
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <div className={classes.split}></div>
        <div className={classes.profile_link}>
          <div className={classes.link}>Info</div>
          <Link className={classes.link} to="info">
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <div className={classes.split}></div>
      </div>
    </div>
  );
}
