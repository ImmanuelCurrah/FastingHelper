import { useForm } from "../../../../hooks/useForm";
import { createSchedule } from "../../../../services/routes/ScheduleRoutes/scheduleRoutes";
import { useParams } from "react-router-dom";
import classes from "./CreateScheduleForm.module.css";

export default function CreateScheduleForm() {
  const defaultInput = {
    name: "",
    start_date: "",
    end_date: "",
  };

  const { id } = useParams();
  const { handleChange, form } = useForm(defaultInput);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createSchedule(id, form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.input_container}>
        <label className={classes.label}>name</label>
        <br />
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
      </div>
      <div className={classes.input_container}>
        <label className={classes.label}>start date</label>
        <br />
        <input
          type="date"
          id="start_date"
          value={form.start_date}
          onChange={handleChange}
        />
        <br />
      </div>
      <div className={classes.input_container}>
        <label className={classes.label}>end date</label>
        <br />
        <input
          type="date"
          id="end_date"
          value={form.end_date}
          onChange={handleChange}
        />
        <br />
      </div>

      <button className={classes.button}>create</button>
    </form>
  );
}
