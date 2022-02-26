import { Routes, Route } from "react-router-dom";
import { ProfilePage, Layout } from "../../exports";
import {
  updateUser,
  deleteUser,
} from "../../services/routes/UserRoutes/userRoutes";

export default function UserContainer(props) {
  const { currentUser } = props;
  return (
    <Layout>
      <div>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProfilePage
                currentUser={currentUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            }
          />
        </Routes>
      </div>
    </Layout>
  );
}
