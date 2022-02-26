import { RegisterForm, Layout } from "../../exports";
import { Link } from "react-router-dom";

export default function RegisterPage(props) {
  const { setCurrentUser } = props;
  return (
    <Layout>
      <h1>Register</h1>
      <RegisterForm setCurrentUser={setCurrentUser} />
      <Link to="/">Already a user?</Link>
    </Layout>
  );
}
