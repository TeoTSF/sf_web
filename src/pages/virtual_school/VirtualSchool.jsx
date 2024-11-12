// VirtualSchool.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyCourses from "./tabs/MyCourses";
import FreeCourses from "./tabs/FreeCourses";
import Profile from "./tabs/Profile";
import NavBarSchool from "./navbar_school/NavBarSchool";
import "./virtualschool.css";
import Admin from "./tabs/admin/Admin";
import { VirtualSchoolProvider } from "../../context/VirtualSchoolContext";

function VirtualSchool() {
  return (
    <VirtualSchoolProvider>
      <div className="virtual_school_container flex column">
        <NavBarSchool />
        <Routes>
          <Route path="my_courses" element={<MyCourses />} />
          <Route path="free" element={<FreeCourses />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
    </VirtualSchoolProvider>
  );
}

export default VirtualSchool;
