import { useEffect } from "react";
import { Recent } from "../../exports";

export default function RecentPage(props) {
  const { currentUser, setPathway } = props;

  useEffect(() => {
    setPathway("/users/profile");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Recent Schedules</h1>
      <Recent currentUser={currentUser} />
    </div>
  );
}
