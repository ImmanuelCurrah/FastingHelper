import { UpdateUserForm } from "../../exports";

export default function EditProfile(props) {
  const { userInfo, editUser } = props;

  return (
    <div>
      <h1>Update Account</h1>
      <UpdateUserForm userInfo={userInfo} editUser={editUser} />
    </div>
  );
}
