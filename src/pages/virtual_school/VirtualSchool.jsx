// VirtualSchool.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyCourses from "./tabs/MyCourses";
import FreeCourses from "./tabs/FreeCourses";
import Profile from "./tabs/Profile";

function VirtualSchool() {
  return (
    <div>
        <br /><br /><br /><br /><br />
      <h1>Escuela Virtual</h1>
      
      {/* Navegación de pestañas */}
      <nav>
        <ul>
          <li><Link to="my_courses">Mis Cursos</Link></li>
          <li><Link to="free">Cursos Gratis</Link></li>
          <li><Link to="profile">Perfil</Link></li>
        </ul>
      </nav>

      {/* Subrutas para cada pestaña */}
      <Routes>
        <Route path="my_courses" element={<MyCourses />} />
        <Route path="free" element={<FreeCourses />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default VirtualSchool;
