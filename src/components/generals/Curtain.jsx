import React, { useEffect } from "react";

const Curtain = ({ children, open }) => {
  useEffect(() => {
    console.log("cambió");
  }, [open]);

  return <div className={open ? "curtain" : "curtain hide"}>{children}</div>;
};

export default Curtain;
