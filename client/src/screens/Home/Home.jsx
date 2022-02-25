import React from "react";

export default function Home(props) {
  const { currentUser } = props;
  console.log(currentUser);
  const firstName = currentUser.name.split(" ")[0];
  return <div>{`Hi, ${firstName}`}</div>;
}
