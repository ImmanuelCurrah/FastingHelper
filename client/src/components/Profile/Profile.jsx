import { Link } from "react-router-dom";
import classes from "./Profile.module.css";

export default function Profile(props) {
  const { currentUser, updateUser, deleteUser } = props;

  return (
    <div className={classes.profile}>
      <div className={classes.profile_container}>
        <div className={classes.circle}></div>
        <div className={classes.profile_name}>
          <div>{currentUser && currentUser.name}</div>
          <Link className={classes.name_link} to="/edit-profile">
            view your profile
          </Link>
        </div>
      </div>

      <div className={classes.profile_link}>Timer</div>
      <div className={classes.profile_link}>Your current Schedule</div>
      <div className={classes.profile_link}>Recent schedules</div>
      <div className={classes.profile_link}>fasting information</div>
    </div>
  );
}
