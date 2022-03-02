import { Recent } from "../../exports";

export default function RecentPage(props) {
  const { currentUser, setPathway } = props;
  return (
    <div>
      <h1>Recent Schedules</h1>
      <Recent currentUser={currentUser} />
    </div>
  );
}
