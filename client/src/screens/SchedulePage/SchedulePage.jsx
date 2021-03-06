import { useState, useEffect } from "react";
import { CreateScheduleForm, Schedule } from "../../exports";
import classes from "./SchedulePage.module.css";

export default function SchedulePage(props) {
  const [toggle, setToggle] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const { currentUser, setPathway } = props;

  useEffect(() => {
    setPathway("/users/profile");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      <Schedule currentUser={currentUser} toggle={toggle} />
      {!toggleForm && (
        <div
          onClick={() => {
            setToggleForm(true);
          }}
          className={classes.set}
        >
          set a new schedule
        </div>
      )}
      {toggleForm && (
        <CreateScheduleForm
          setToggle={setToggle}
          setToggleForm={setToggleForm}
        />
      )}
    </div>
  );
}
