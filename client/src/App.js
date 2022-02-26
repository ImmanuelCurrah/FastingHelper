import { Routes, Route } from "react-router-dom";
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
          element={<UserContainer currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
