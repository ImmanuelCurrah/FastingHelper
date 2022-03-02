import { Layout } from "../../exports";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyUser } from "../../services/routes/UserRoutes/userRoutes";
import { Posts } from "../../exports";
import { AiOutlinePlus } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import classes from "./Home.module.css";
import { fetchAllSchedules } from "../../services/routes/ScheduleRoutes/scheduleRoutes";

export default function Home(props) {
  const [numberOfSchedules, setNumberOfSchedules] = useState(0);
  const { currentUser } = props;
  const navigate = useNavigate();
  let firstName = "";

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const schedulesNumber = await fetchAllSchedules();
      setNumberOfSchedules(schedulesNumber.length);
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
            {`There has been ${numberOfSchedules} schedules set worldwide!`}
          </div>
          <div className={classes.story}>
            <Link className={classes.create_post} to="/posts/new">
              <AiOutlinePlus className={classes.plus} />
            </Link>
          </div>
          <div>You</div>
        </div>
        <div className={classes.split}></div>
        <div>{new Date().toLocaleDateString()}</div>
        <div className={classes.check_in}>
          <div className={classes.box}>
            <BsEmojiSmile />
          </div>
          <div className={classes.check_in_messages}>
            <div className={classes.small_messages}>Daily check-in</div>
            <div className={classes.how}>How are you feeling today?</div>
            <div className={classes.small_messages}>
              have you checked in today?
            </div>
          </div>
        </div>
        <div className={classes.split}></div>
      </div>
      <Posts currentUser={currentUser} />
    </Layout>
  );
}
