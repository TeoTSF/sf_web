import React, { useContext } from "react";
import Curtain from "../generals/Curtain";
import MainContext from "../../context/MainContext";
import logoV from "/logo_peq.png";
import YellowBtn from "../generals/YellowBtn";

const RedirectModal = () => {
  const { openRedirectModal, setOpenRedirectModal } = useContext(MainContext);

  console.log(openRedirectModal);
  const toggleModal = () => {
    setOpenRedirectModal(!openRedirectModal)
  }
  return (
    <Curtain open={!openRedirectModal}>
      <div className="redirect_modal_info jf-c flex row wrap">
        <div className="redirect_section redirect1 flex column al-c jf-c">
            <img src={logoV} alt="logo trading sin fronteras" />
            <p className="x-big" style={{marginBottom: "20px"}}>Continuar en la Web</p>
            <YellowBtn btnAction={toggleModal}>Explorar</YellowBtn>
        </div>
        <div className="redirect_section redirect2 flex column al-c jf-c">

        </div>
      </div>
    </Curtain>
  );
};

export default RedirectModal;
