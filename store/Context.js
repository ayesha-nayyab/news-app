import NetInfo from "@react-native-community/netinfo";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return unSubscribe;
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        isConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
