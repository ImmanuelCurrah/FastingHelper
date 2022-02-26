import { Layout } from "../../exports";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";
import { Posts } from "../../exports";
import classes from "./Home.module.css";

export default function Home(props) {
  const { currentUser } = props;
  const navigate = useNavigate();

  let firstName = "";

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await verifyUser();
      if (user) {
        return;
      } else {
        navigate("/");
      }
    };
    checkIfLoggedIn();
    //eslint-disable-next-line
  }, []);

  if (currentUser) {
    firstName = currentUser.name.split(" ")[0];
  }

  return (
    <Layout>
      <div className={classes.homepage}>
        <div className={classes.title_container}>
          <div className={classes.title}>FastingHelper</div>
          {firstName && (
            <div className={classes.name}>{`Hi, ${firstName}`}</div>
          )}
          <div className={classes.title}>
            information about how many fasts and whatnot
          </div>
        </div>
        <div className={classes.check_in}>
          <div className={classes.box}></div>
          <div>How are you feeling today?</div>
        </div>{" "}
        <Posts />
      </div>
    </Layout>
  );
}
