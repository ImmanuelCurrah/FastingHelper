import { CreateScheduleForm, Schedule } from "../../exports";

export default function SchedulePage(props) {
  const { currentUser } = props;

  return (
    <div>
      <h1>Schedule</h1>
      <Schedule currentUser={currentUser} />
      <CreateScheduleForm />
    </div>
  );
}
