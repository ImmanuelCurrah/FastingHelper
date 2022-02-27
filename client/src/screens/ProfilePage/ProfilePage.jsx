import { Profile } from "../../exports";

export default function ProfilePage(props) {
  const { currentUser, logout, removeUser } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
      <button onClick={logout}>Logout</button>
      <button
        onClick={() => {
          removeUser(currentUser.id);
        }}
      >
        Delete Account
      </button>
    </div>
  );
}
