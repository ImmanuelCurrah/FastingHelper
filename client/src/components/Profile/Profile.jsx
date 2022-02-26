import React from "react";

export default function Profile(props) {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <div>
      <div>{currentUser.name}</div>
      <div>view your profile</div>
    </div>
  );
}
