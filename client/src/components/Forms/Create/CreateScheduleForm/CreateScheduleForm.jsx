import { useForm } from "../../../../hooks/useForm";
import { createSchedule } from "../../../../services/routes/ScheduleRoutes/scheduleRoutes";
import { useParams } from "react-router-dom";

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
      <label>name</label>
      <br />
      <input type="text" id="name" value={form.name} onChange={handleChange} />
      <br />
      <label>start date</label>
      <br />
      <input
        type="date"
        id="start_date"
        value={form.start_date}
        onChange={handleChange}
      />
      <br />
      <label>end date</label>
      <br />
      <input
        type="date"
        id="end_date"
        value={form.end_date}
        onChange={handleChange}
      />
      <br />
      <button>create</button>
    </form>
  );
}
