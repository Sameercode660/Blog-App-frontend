import React, { useEffect } from "react";
import useLoginContext from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Protected({children}) {
  const { verified } = useLoginContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!verified) {
      navigate("/");
    }
  }, []);
  return (
    <>
    {children}
    </>
  );
}

export default Protected;
