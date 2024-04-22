// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleToggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <button onClick={handleToggleStatus}>Toggle Status</button>
    </div>
  );
}

export default UserProfile;
