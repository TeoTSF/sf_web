import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../services/axios";
import { useEffect } from "react";

const VirtualSchoolContext = createContext();

export const VirtualSchoolProvider = ({ children }) => {
  const [module, setModule] = useState("");
  const [allUser, setAllUser] = useState([])
  const path = {
    allUser: "/users",
  };

  useEffect(() => {
    if (module === "admin_users") {
        getAllUsers()
    }
  }, [module])

  const getAllUsers = async () => {
    return await axiosInstance.get(path.allUser)
    .then(res => setAllUser(res.data))
  };

  const functions = {
    setModule,
    getAllUsers,
    allUser
  };

  return (
    <VirtualSchoolContext.Provider value={functions}>
      {children}
    </VirtualSchoolContext.Provider>
  );
};

export default VirtualSchoolContext;
