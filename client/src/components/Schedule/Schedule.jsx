import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserSchedule } from "../../services/routes/ScheduleRoutes/scheduleRoutes";

export default function Schedule(props) {
  const [currentSchedule, setCurrentSchedule] = useState({});

  const { currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchSchedule = async () => {
      const schedule = await getUserSchedule(id);
      console.log(schedule);
      setCurrentSchedule(schedule.data.reverse()[0]);
    };
    fetchSchedule();
  }, []);

  const startDate = currentSchedule?.start_date?.split("").reverse().join("");
  const endDate = currentSchedule?.end_date?.split("").reverse().join("");

  return (
    <>
      <div>{`Hello ${currentUser?.name}, this is the current schedule you have set for yourself:`}</div>
      <div>
        {currentSchedule ? (
          <div>
            <div>{`fast name: ${currentSchedule.name}`}</div>
            <div>{`start date: ${startDate}`}</div>
            <div>{`end date: ${endDate}`}</div>
          </div>
        ) : (
          <div>please set a schedule</div>
        )}
      </div>
    </>
  );
}
