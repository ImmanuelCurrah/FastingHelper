import { useEffect } from "react";
import { Connect } from "../../exports";

export default function ConnectPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Connect</h1>
      <Connect />
    </div>
  );
}
