import { Link } from "react-router-dom";
import classes from "./UserDetails.module.css";

export default function UserDetails(props) {
  const { currentUser } = props;

  if (!currentUser) {
    return "Loading...";
  }

  const date = new Date(currentUser.created_at).toDateString();
  const lastUpdate = new Date(currentUser.updated_at).toDateString();

  return (
    <div className={classes.container}>
      <div className={classes.icon_container}>
        <div className={classes.icon}></div>
        <div>{currentUser.name}</div>
        <div>
          <Link
            className={classes.name_link}
            to={`/users/profile/${currentUser.id}/edit`}
          >
            Edit details
          </Link>
        </div>
      </div>
      <div className={classes.split}></div>
      <div>{currentUser.email}</div>
      <div>{`Member since: ${date}`}</div>
      <div>{`Last update: ${lastUpdate}`}</div>
    </div>
  );
}
