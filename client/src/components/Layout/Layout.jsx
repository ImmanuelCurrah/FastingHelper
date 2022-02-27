import { NavBar, Footer } from "../../exports";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <NavBar />
      <div className={classes.props_children}>
        <div>{props.children}</div>
      </div>

      <Footer />
    </div>
  );
}
