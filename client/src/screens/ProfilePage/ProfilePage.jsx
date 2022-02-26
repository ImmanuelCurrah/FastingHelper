import { Profile } from "../../exports";

export default function ProfilePage(props) {
  const { currentUser } = props;
  return (
    <div>
      <Profile currentUser={currentUser} />
    </div>
  );
}
