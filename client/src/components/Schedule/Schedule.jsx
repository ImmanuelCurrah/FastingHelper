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

  let startDate = "";
  let endDate = "";

  if (currentSchedule) {
    const startDateSetup = currentSchedule?.start_date?.split("-").reverse();
    const endDateSetup = currentSchedule?.end_date?.split("-").reverse();
    if (startDateSetup) {
      startDate = `${startDateSetup[1]}-${startDateSetup[0]}-${startDateSetup[2]}`;
      endDate = `${endDateSetup[1]}-${endDateSetup[0]}-${endDateSetup[2]}`;
    }
  }

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
