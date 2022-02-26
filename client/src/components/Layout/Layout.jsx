import { NavBar, Footer } from "../../exports";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
