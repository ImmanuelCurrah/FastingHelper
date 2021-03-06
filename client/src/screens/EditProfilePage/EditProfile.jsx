import { useEffect } from "react";
import { UpdateUserForm } from "../../exports";

export default function EditProfile(props) {
  const { userInfo, editUser, setPathway } = props;

  useEffect(() => {
    setPathway("/users/details");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Update Account</h1>
      <UpdateUserForm userInfo={userInfo} editUser={editUser} />
    </div>
  );
}
