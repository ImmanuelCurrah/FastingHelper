import { useState } from "react";
import { CreateScheduleForm, Schedule } from "../../exports";

export default function SchedulePage(props) {
  const [toggle, setToggle] = useState(false);
  const { currentUser } = props;

  return (
    <div>
      <h1>Schedule</h1>
      <Schedule currentUser={currentUser} toggle={toggle} />
      <CreateScheduleForm setToggle={setToggle} />
    </div>
  );
}
