// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import UserContext from "../components/UserContext";
import UserProfile from "../components/UserProfile";

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider
      value={{ isOnline: isOnline, setIsOnline: setIsOnline }}
    >
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
