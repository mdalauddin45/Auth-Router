import React, { Children } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const UserContext = ({ Children }) => {
  const user = { displyName: "Akash" };
  const authInfo = { user: user };
  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default UserContext;
