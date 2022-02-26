import { RegisterForm, Layout } from "../../exports";

export default function RegisterPage(props) {
  const { setCurrentUser } = props;
  return (
    <Layout>
      <h1>Register</h1>
      <RegisterForm setCurrentUser={setCurrentUser} />
    </Layout>
  );
}
