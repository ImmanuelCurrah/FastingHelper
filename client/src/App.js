import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/routes/UserRoutes/userRoutes";
import { Home, LoginPage } from "./exports";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route
          path="/login"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
