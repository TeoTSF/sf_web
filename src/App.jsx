import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectecRoutes";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
  

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

