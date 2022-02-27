import { Link } from "react-router-dom";
import classes from "./Profile.module.css";

export default function Profile(props) {
  const { currentUser } = props;
  if (!currentUser) {
    return "Loading";
  }
  console.log(currentUser.name.split("")[0]);

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
          <Link className={classes.name_link} to="timer">
            Timer
          </Link>
        </div>
        <div className={classes.profile_link}>
          <Link className={classes.name_link} to="schedule">
            Schedule
          </Link>
        </div>
        <div className={classes.profile_link}>
          <Link className={classes.name_link} to="recent">
            Recent
          </Link>
        </div>
        <div className={classes.profile_link}>
          <Link className={classes.name_link} to="info">
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}
