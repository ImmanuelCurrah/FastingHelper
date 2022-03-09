import { useEffect } from "react";
import { Learn } from "../../exports";

export default function LearnPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Learn</h1>
      <Learn />
    </div>
  );
}
