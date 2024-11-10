import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Curtain from "../../components/generals/Curtain";
import Login from "./Login";
import MainContext from "../../context/MainContext";
const initialValues = { email: "", password: "" }
function LoginPage() {
  const { setOpenModalLogin, openModalLogin, login, fetchRequestReset, setOpenRedirectModal } =
    useContext(MainContext);

  const [formData, setFormData] = useState(initialValues);
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const {status, data} = await login(formData);
      if (status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user.name + " " + data.user.lastname
          )
        );
        localStorage.setItem("roleId", data.user.roleId);
        setFormData(initialValues)
        setOpenModalLogin(false);
        setOpenRedirectModal(true)
      }
    } catch (error) {
      alert(error);
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
          toast: true,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Curtain open={openModalLogin}>
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
          onClick={state == 0 ? handleLogin : requestReset}
        >
          {state == 0 ? "Ingresar" : "Enviar"}
        </button>
      </div>
    </Curtain>
  );
}

export default LoginPage;
