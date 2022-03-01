import { useState } from "react";
import Countdown from "react-countdown";
import classes from "./Timer.module.css";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <select
        className={classes.select}
        onChange={(e) => {
          setTimer(+e.target.value);
          setToggle(true);
        }}
      >
        <option value={0}>Select an option</option>
        <option value={28800000}>8 hour daily fast</option>
        <option value={86400000}>24 hour day fast</option>
      </select>
      <div className={classes.timer_num}> {!toggle && "00:00:00:00"}</div>
      <br />
      {toggle && (
        <Countdown className={classes.timer_num} date={Date.now() + timer}>
          <h2>completed</h2>
        </Countdown>
      )}
      <button
        onClick={() => {
          setToggle(false);
        }}
        className={classes.button}
      >
        Reset
      </button>
    </div>
  );
}
