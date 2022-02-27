import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProfilePage, Layout, EditProfile, UserDetails } from "../../exports";

import {
  updateUser,
  deleteUser,
} from "../../services/routes/UserRoutes/userRoutes";

export default function UserContainer(props) {
  const [userInfo, setUserInfo] = useState({});
  const { currentUser, logout } = props;

  const defaultInput = {
    name: userInfo.name,
    email: userInfo.email,
  };

  useEffect(() => {
    if (currentUser) {
      setUserInfo(currentUser);
      localStorage.setItem("name", currentUser.name);
      localStorage.setItem("email", currentUser.email);
    }
  }, [currentUser]);

  const editUser = async (user_id, updateData) => {
    console.log(user_id, updateData);
    const user = await updateUser(user_id, updateData);
    console.log(user);
    setUserInfo(updateData);
  };

  const removeUser = async (id) => {
    const user = await deleteUser(id);
    const newInfo = userInfo.filter((item) => item.id !== +id);
    setUserInfo(newInfo);
  };

  return (
    <Layout>
      <div>
        <Routes>
          <Route
            path="/profile"
            element={<ProfilePage currentUser={currentUser} logout={logout} />}
          />{" "}
          <Route
            path={`/profile/:id/edit`}
            element={
              <EditProfile
                userInfo={userInfo}
                editUser={editUser}
                removeUser={removeUser}
                defaultInput={defaultInput}
              />
            }
          />
          <Route
            path="/details"
            element={<UserDetails currentUser={currentUser} />}
          />
        </Routes>
      </div>
    </Layout>
  );
}
