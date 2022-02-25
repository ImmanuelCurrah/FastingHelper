import { LoginForm } from "../../exports";
import { useState } from "react";
import { loginUser } from "../../services/routes/UserRoutes/userRoutes";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const [guest, setGuest] = useState({
    email: "immanuel@me.com",
    password: 12345678,
  });
  const { setCurrentUser } = props;
  const navigate = useNavigate();

  const loginGuest = async () => {
    const user = await loginUser(guest);
    setCurrentUser(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm setCurrentUser={setCurrentUser} />
      <div>Continue as a </div>
      <div onClick={loginGuest}>guest</div>
    </div>
  );
}
