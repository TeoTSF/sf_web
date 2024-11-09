import { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuOptions = [
    { path: "/", name: "HOME" },
    { path: "/about_us", name: "NOSOTROS" },
    { path: "/blog", name: "BLOG" },
  ];

  const icons = [
    {
      icon: <i className='bx-md bx bxl-youtube' ></i>,
      path: "https://www.youtube.com/@AUTODIDACTAS_SD",
    },
    {
      icon: <i className='bx-md bx bxl-instagram-alt'></i>,
      path: "https://www.instagram.com/@tradingSF",
    },
    {
      icon: <i className='bx bxl-tiktok bx-md' />,
      path: "https://www.tiktok.com/@tradingsinfronter1?_t=8oar2pDr20r&_r=1",
    },
    {
      icon: <i className='bx-md bx bx-user' ></i>,
      path: "",
    },
  ];

  const functions = {
    handleScrollToTop,
    menuOptions,
    icons
  };

  return (
    <MainContext.Provider value={functions}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
