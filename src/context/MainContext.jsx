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
      icon: <i className='bx-sm bx bxl-youtube' />,
      path: "https://youtube.com/@tradingsinfrontera?si=JV8rZWXs8R0BPnnJ",
    },
    {
      icon: <i className='bx-sm bx bxl-instagram-alt' />,
      path: "https://www.instagram.com/trading_sinfrontera?igsh=MWhoeDM0MTRpeWZ4Yw==",
    },
    {
      icon: <i className='bx bxl-tiktok bx-sm' />,
      path: "https://www.tiktok.com/@tradingsinfronter1?_t=8oar2pDr20r&_r=1",
    },
    {
      icon: <i className='bx-sm bx bx-user' />,
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
