import classes from "./Info.module.css";

export default function Info() {
  return (
    <div>
      <h2>8 hour intermittent Fasting</h2>
      <div className={classes.information}>
        <div className={classes.text}>
          Doing a 16/8 fast can be very doable and helpful for you health. Over
          a long period of time it can help promote healthy weight loss and help
          the body heal itself of low level inflammation build up from eating
          wrong or pushing too hard.
        </div>
      </div>
      <h2>24 hour day long Fast</h2>
      <div className={classes.information}>
        <div className={classes.text}>
          24 hour fasts may be a bit harder. But help the body rid itself of
          toxins and also promote weight loss and overall health in your body
        </div>
      </div>
    </div>
  );
}
