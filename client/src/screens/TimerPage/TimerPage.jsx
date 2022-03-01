import { useEffect } from "react";
import { Timer } from "../../exports";

export default function TimerPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/users/profile");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <Timer />
      <div>suggestions</div>
    </div>
  );
}
