import { Layout } from "../../exports";

export default function Home(props) {
  const { currentUser } = props;

  let firstName = "";

  if (currentUser) {
    firstName = currentUser.name.split(" ")[0];
  }

  return <Layout>{firstName && <div>{`Hi, ${firstName}`}</div>}</Layout>;
}
