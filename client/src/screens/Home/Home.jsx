import { Layout } from "../../exports";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const { currentUser } = props;
  console.log(currentUser);

  const navigate = useNavigate();
  let firstName = "";

  if (currentUser) {
    firstName = currentUser.name.split(" ")[0];
  }
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  return <Layout>{firstName && <div>{`Hi, ${firstName}`}</div>}</Layout>;
}
