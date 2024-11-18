import React, { createContext, useState } from "react";
import axiosInstance from "../services/axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const VirtualSchoolContext = createContext();

export const VirtualSchoolProvider = ({ children }) => {
  const [module, setModule] = useState("");
  const [allUser, setAllUser] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [allVideos, setAllVideos] = useState([])
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const path = {
    users: "/users",
    posts: "/post",
    courses: "/courses",
    videos: "/videos",
  };

  useEffect(() => {
    if (module === "admin_users") {
        getAllUsers()
    }
    if (module === "admin_posts") {
      getAllPosts()
    }
    if (module === "admin_courses") {
      getAllCourses()
    }
    if (module === "admin_videos") {
      getAllVideos()
    }
  }, [module])

  const getAllUsers = async () => {
    setLoading(true)
    return await axiosInstance.get(path.users)
    .then(res => setAllUser(res.data))
    .finally(() => setLoading(false))
  };
  
  const getAllPosts = async () => {
    setLoading(true)
    return await axiosInstance.get(path.posts)
    .then(res => setAllPosts(res.data))
    .finally(() => setLoading(false))
  };

  const getAllCourses = async (flag) => {
    setLoading(true)
    return await axiosInstance.get(`${path.courses}${flag ? "?flag=true" : ""}`)
    .then(res => setAllCourses(res.data))
    .finally(() => setLoading(false))
  };

  const getAllVideos = async () => {
    setLoading(true)
    return await axiosInstance.get(path.videos)
    .then(res => setAllVideos(res.data))
    .finally(() => setLoading(false))
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

  const createCourse = async(data) => {
    try {
      await axiosInstance.post(path.courses, data)
      Swal.fire({
        title: "Curso creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un curso",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllCourses()
    }
  }

  const createVideo = async(data) => {
    try {
      await axiosInstance.post(path.videos, data)
      Swal.fire({
        title: "Video creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un Video",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllVideos()
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
    createPost,
    getAllCourses,
    allCourses,
    loading,
    createCourse,
    createVideo,
    allVideos
  };

  return (
    <VirtualSchoolContext.Provider value={functions}>
      {children}
    </VirtualSchoolContext.Provider>
  );
};

export default VirtualSchoolContext;
