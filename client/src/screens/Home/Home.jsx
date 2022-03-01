import { Layout } from "../../exports";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";
import { Posts } from "../../exports";
import { AiOutlinePlus } from "react-icons/ai";
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
          {firstName && <div className={classes.name}>{`Hi ${firstName}`}</div>}
          <div className={classes.title}>
            information about how many fasts and whatnot
          </div>
          <div className={classes.story}>
            <Link className={classes.create_post} to="/posts/new">
              <AiOutlinePlus className={classes.plus} />
            </Link>
          </div>
          <div>You</div>
        </div>
        <div className={classes.split}></div>
        <div className={classes.check_in}>
          <div className={classes.box}></div>
          <div>How are you feeling today?</div>
        </div>
        <div className={classes.split}></div>
      </div>
      <Posts currentUser={currentUser} />
    </Layout>
  );
}
