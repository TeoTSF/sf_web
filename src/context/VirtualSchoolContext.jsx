import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../services/axios";
import { useEffect } from "react";

const VirtualSchoolContext = createContext();

export const VirtualSchoolProvider = ({ children }) => {
  const [module, setModule] = useState("");
  const [allUser, setAllUser] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const path = {
    allUser: "/users",
    allPost: "/post"
  };

  useEffect(() => {
    if (module === "admin_users") {
        getAllUsers()
    }
    if (module === "admin_posts") {
      getAllPosts()
    }
  }, [module])

  const getAllUsers = async () => {
    return await axiosInstance.get(path.allUser)
    .then(res => setAllUser(res.data))
  };
  
  const getAllPosts = async () => {
    return await axiosInstance.get(path.allPost)
    .then(res => setAllPosts(res.data))
  };

  const functions = {
    setModule,
    getAllUsers,
    allUser,
    getAllPosts,
    allPosts
  };

  return (
    <VirtualSchoolContext.Provider value={functions}>
      {children}
    </VirtualSchoolContext.Provider>
  );
};

export default VirtualSchoolContext;
