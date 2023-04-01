import React, { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext();

const GlobalContext = ({ children }) => {
  const [state, setState] = useState({
    userType: null,
    
  });
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

const useGlobalContext = () => {
  const res = useContext(Context);
  if (!res) {
    return null;
  }
  return res;
};

export { GlobalContext, useGlobalContext };
