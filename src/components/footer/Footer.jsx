import React, { useContext } from "react";
import "./footer.css";
import MainContext from "../../context/MainContext";

const Footer = () => {
  const { handleScrollToTop } = useContext(MainContext);
  return (
    <>
      <div className="footer_container flex row wrap">
        <div className="footer_info full_w full_h">

        </div>
      </div>
      <div className="footer_last_section full-w flex jf-c al-c relative autoM">
        <p>© 2024 Trading sin fronteras. Todos los derechos reservados.</p>
        <button
          className="to_top_btn btn_app absolute"
          onClick={handleScrollToTop}
        >
          <i className='bx bx-chevrons-up bx-md' />
        </button>
      </div>
    </>
  );
};

export default Footer;
