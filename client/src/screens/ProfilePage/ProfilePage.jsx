import { Profile } from "../../exports";
import classes from "./ProfilePage.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function ProfilePage(props) {
  const { currentUser, logout, removeUser } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
      <div className={classes.logout_delete_container}>
        <button className={classes.logout} onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>
        <button
          className={classes.delete}
          onClick={() => {
            removeUser(currentUser.id);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}
