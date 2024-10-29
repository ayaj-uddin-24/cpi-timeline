import { createContext } from "react";
import { posts, images } from "../data";

export const SportContext = createContext(null);

const SportContextProvider = ({ children }) => {
  const value = { posts, images };
  return (
    <SportContext.Provider value={value}>{children}</SportContext.Provider>
  );
};

export default SportContextProvider;
