import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log("context", user);
  return (
    <div>
      <h1>This is home for {user?.displayName}</h1>
    </div>
  );
};

export default Home;
