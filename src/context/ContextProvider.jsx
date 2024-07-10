import React, { createContext, useState } from "react";

export const context = createContext();

function ContextProvider({ children }) {
  const [service, setService] = useState(false);

  return (
    <context.Provider value={{ service, setService }}>
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
