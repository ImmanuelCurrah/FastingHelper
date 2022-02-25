import { LoginForm } from "../../exports";

export default function LoginPage(props) {
  const { setCurrentUser } = props;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm setCurrentUser={setCurrentUser} />
    </div>
  );
}
