import { useEffect } from "react";
import { Info } from "../../exports";

export default function InfoPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/users/profile");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Fasting Information</h1>
      <Info />
    </div>
  );
}
