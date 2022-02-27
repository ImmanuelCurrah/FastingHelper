import { Profile } from "../../exports";

export default function ProfilePage(props) {
  const { currentUser, logout } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
