import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../services/axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const VirtualSchoolContext = createContext();

export const VirtualSchoolProvider = ({ children }) => {
  const [module, setModule] = useState("");
  const [allUser, setAllUser] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [modal, setModal] = useState(false)
  const path = {
    users: "/users",
    posts: "/post",
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
    return await axiosInstance.get(path.users)
    .then(res => setAllUser(res.data))
  };
  
  const getAllPosts = async () => {
    return await axiosInstance.get(path.posts)
    .then(res => setAllPosts(res.data))
  };

  const createPost = async(data) => {
    try {
      await axiosInstance.post(path.posts, data)
      Swal.fire({
        title: "Post creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un post",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllPosts()
    }
  } 

  const functions = {
    setModule,
    module,
    getAllUsers,
    allUser,
    getAllPosts,
    allPosts,
    modal,
    setModal,
    createPost
  };

  return (
    <VirtualSchoolContext.Provider value={functions}>
      {children}
    </VirtualSchoolContext.Provider>
  );
};

export default VirtualSchoolContext;
