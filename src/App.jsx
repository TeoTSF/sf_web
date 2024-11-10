import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectecRoutes";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import BlogItemView from "./pages/blog/BlogItemView";
import Blog from "./pages/blog/Blog";
import LoginPage from "./pages/login/LoginPage";

function App() {

  return (
    <HashRouter>
      <LoginPage />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/:id" element={<BlogItemView />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

