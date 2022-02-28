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
      setCurrentSchedule(schedule.data.reverse()[0]);
    };
    fetchSchedule();
  }, []);

  return (
    <>
      <div>{`Hello ${currentUser?.name}, this is the current schedule you have set for yourself:`}</div>
      <div>
        {currentSchedule ? (
          <div>
            <div>{`fast name: ${currentSchedule.name}`}</div>
            <div>{`start date: ${currentSchedule.start_date}`}</div>
            <div>{`end date: ${currentSchedule.end_date}`}</div>
          </div>
        ) : (
          <div>please set a schedule</div>
        )}
      </div>
    </>
  );
}
