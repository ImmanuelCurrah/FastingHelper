import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button type="submit" className={classes.button}>
      {props.children}
    </button>
  );
}
