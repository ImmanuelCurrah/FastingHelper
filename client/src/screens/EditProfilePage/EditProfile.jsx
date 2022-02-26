import { UpdateUserForm } from "../../exports";

export default function EditProfile(props) {
  const { userInfo, editUser, removeUser } = props;

  return (
    <div>
      <UpdateUserForm userInfo={userInfo} editUser={editUser} />
    </div>
  );
}
