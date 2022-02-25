import { NavBar } from "../../exports";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
}
