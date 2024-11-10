import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Curtain from "../../components/generals/Curtain";
import Login from "./Login";
import MainContext from "../../context/MainContext";

function LoginPage() {
  const { setOpenModalLogin, openModalLogin, login, fetchRequestReset } = useContext(MainContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login(formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user.firstname + " " + response.data.user.lastname)
        );
        localStorage.setItem("roleId", response.data.user.roleId);
        setOpenModalLogin(false);
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      alert(error)
    }
  };

  const requestReset = async (event) => {
    event.preventDefault();
    formData.frontBaseUrl = `${window.location.origin}/#/reset_password`;
    try {
      const response = await fetchRequestReset(formData);
      if (response.status === 200) {
        setOpenModalLogin(false);
        Swal.fire({
          title: "Se ha enviado un correo con las intrucciones de recuperación",
          icon: "success",
          confirmButtonColor: "#F89C2A",
          toast: true
        }).then(() => {
          navigate("/");
        })
      }
    } catch (error) {
      alert(error)
    }
  };
  console.log(openModalLogin);
  
  return (
    <Curtain open={!openModalLogin}>
      <div className="login_container">
        <i
          className="bx bx-x bx-sm btn_app"
          onClick={() => setOpenModalLogin(!openModalLogin)}
        ></i>
        <h1>Login Page</h1>
        <Login
          setFormData={setFormData}
          formData={formData}
          state={state}
          setState={setState}
        />
        <button
          addClass={"secondary round"}
          onClick={state == 0 ? handleLogin : requestReset}
        >
          {state == 0 ? "Ingresar" : "Enviar"}
        </button>
      </div>
    </Curtain>
  );
}

export default LoginPage;
