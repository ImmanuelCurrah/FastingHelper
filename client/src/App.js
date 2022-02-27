import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/routes/UserRoutes/userRoutes";
import {
  Home,
  LoginPage,
  RegisterPage,
  PostContainer,
  UserContainer,
} from "./exports";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    };
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home currentUser={currentUser} />} />
        <Route
          path="/"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/register"
          element={<RegisterPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/posts/*"
          element={<PostContainer currentUser={currentUser} />}
        />
        <Route
          path="/users/*"
          element={<UserContainer currentUser={currentUser} logout={logout} />}
        />
      </Routes>
    </div>
  );
}

export default App;
