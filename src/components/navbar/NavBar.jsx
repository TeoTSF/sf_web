import React, { useContext } from "react";
import Menu from "./Menu";
import "./navbar.css";
import logoH from "/logo_h.png";
import PrimaryBtn from "../generals/PrimaryBtn";
import MainContext from "../../context/MainContext";

const NavBar = () => {
  const {icons} = useContext(MainContext)
 
  return (
    <div className="navbar_container full-vw flex row">
      <div className="navbar_logo_container full-h flex">
        <img src={logoH} alt="" />
      </div>
      <div className="navbar_menu_container al-c">
        <Menu />
        <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
      </div>
        <div className="navbar_icon_container flex row jf-sb al-c">
          {icons.map((item, i) => (
            <a key={i} href={item.path} target="_blank" className="flex jf-c al-c">
              {item.icon}
            </a>
          ))}
        </div>
    </div>
  );
};

export default NavBar;
