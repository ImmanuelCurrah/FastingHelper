import { Profile } from "../../exports";
import classes from "./ProfilePage.module.css";

export default function ProfilePage(props) {
  const { currentUser, logout, removeUser } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
      <div className={classes.logout_delete}>
        <button onClick={logout}>Logout</button>
        <button
          onClick={() => {
            removeUser(currentUser.id);
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
