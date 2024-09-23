import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MainContext from "../../context/MainContext";
// import MainContext from "/src/context/MainContext";

const Menu = () => {
  const {handleScrollToTop} = useContext(MainContext)

  const menuOptions = [
    { path: "/", name: "HOME" },
    { path: "/about_us", name: "NOSOTROS" },
    { path: "/blog", name: "BLOG" },
  ];


  return (
      <div className="navbar_menu_internal_container full-h flex row al-c">
        <div className="navbar_menu_links flex row">
          {menuOptions.map((item, i) => (
            <NavLink key={i} to={item.path} className={({ isActive, isPending }) =>
              isActive ? "btn_app link bold big link_active" : "btn_app link bold big link_inactive"}
              onClick={handleScrollToTop}
              >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* <i className='bx bx-menu bx-md' /> */}
      </div>
  );
};

export default Menu;
