import React from "react";

export default function Home(props) {
  const { currentUser } = props;
  const firstName = currentUser.name.split(" ")[0];
  return <div>{`Hi, ${firstName}`}</div>;
}
