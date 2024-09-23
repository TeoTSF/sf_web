import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const HeadBand = () => {
  return (
    <div className="headBand_container">
      <div className="headBand_info flex row full-w full-h wrap autoM jf-sb al-c">
        <div className="flex row al-c jf-c">
          <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
        </div>
        <div className="flex row al-c jf-c x-big bold">
          <i className="bx bxl-telegram bx-md" />
          <p>@Tradingsinfrontera</p>
        </div>
        <div className="flex row al-c jf-c x-big bold">
          <i className="bx bxl-instagram bx-md" />
          <p>@trading_sinfrontera</p>
        </div>
      </div>
    </div>
  );
};

export default HeadBand;
