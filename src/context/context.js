import { createContext, useState } from "react";

export const context = createContext();

const Provider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
    isNameCompleted: false,
    isBirthdayCompleted: false,
    isContactCompleted: false,
  });

  return (
    <context.Provider
      value={{
        globalState: globalState,
        setGlobalState,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
