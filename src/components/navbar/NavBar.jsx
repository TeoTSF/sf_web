import React from "react";
import Menu from "./Menu";
import "./navbar.css";
import logoH from "/logo_h.png";
import youtube from "/button_youtube.png";
import instagram from "/button_instagram.png";
import user from "/button_user.png";
import PrimaryBtn from "../generals/PrimaryBtn";

const NavBar = () => {
  const icons = [
    {
      icon: youtube,
      path: "https://www.youtube.com/@AUTODIDACTAS_SD",
    },
    {
      icon: instagram,
      path: "https://www.instagram.com/@tradingSF",
    },
    {
      icon: user,
      path: "",
    },
  ];
  return (
    <div className="navbar_container full-vw flex row">
      <div className="navbar_logo_container full-h flex">
        <img src={logoH} alt="" />
      </div>
      <div className="navbar_menu_container flex al-c">
        <Menu />
        <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
        <div className="navbar_icon_container flex row jf-sb">
          {icons.map((item, i) => (
            <a key={i} href={item.path} target="_blank">
              <img src={item.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
