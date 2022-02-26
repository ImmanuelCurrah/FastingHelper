import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/routes/UserRoutes/userRoutes";
import { Home, LoginPage, RegisterPage } from "./exports";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
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
      </Routes>
    </div>
  );
}

export default App;
