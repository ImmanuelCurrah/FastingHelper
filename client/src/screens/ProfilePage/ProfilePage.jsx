import { Profile } from "../../exports";

export default function ProfilePage(props) {
  const { currentUser, updateUser, deleteUser } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
    </div>
  );
}
