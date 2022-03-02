import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserSchedule } from "../../services/routes/ScheduleRoutes/scheduleRoutes";
import classes from "./Recent.module.css";

export default function Recent(props) {
  const [pastSchedules, setPastSchedules] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const recentSchedules = await getUserSchedule(id);
      setPastSchedules(recentSchedules.data);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div>
        {pastSchedules.map((schedule) => {
          return (
            <div key={schedule.id} className={classes.container}>
              {schedule.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
