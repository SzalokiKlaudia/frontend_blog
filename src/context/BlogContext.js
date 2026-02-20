import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

 

  
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default function useDataContext() {
  return useContext(DataContext);
}
