import { Layout } from "../../exports";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";

export default function Home(props) {
  const { currentUser } = props;
  const navigate = useNavigate();

  let firstName = "";

  useEffect(async () => {
    const user = await verifyUser();
    console.log(user);
    if (user) {
      return;
    } else {
      navigate("/");
    }
  }, []);

  if (currentUser) {
    firstName = currentUser.name.split(" ")[0];
  }

  return <Layout>{firstName && <div>{`Hi, ${firstName}`}</div>}</Layout>;
}
