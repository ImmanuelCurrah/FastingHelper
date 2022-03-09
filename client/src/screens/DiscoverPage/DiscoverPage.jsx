import { useEffect } from "react";
import { Discover } from "../../exports";

export default function DiscoverPage(props) {
  const { setPathway } = props;

  useEffect(() => {
    setPathway("/");
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Discover</h1>
      <Discover />
    </div>
  );
}
