import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { rezContext } from "./Act1startpage";

const Onerectangle = () => {
  const { setArv } = useContext(rezContext);

  const navigate = useNavigate();
  const onNext = (e) => {
    navigate("/activity1/letusverify/act1startpage");
    setArv(4);
  };

  return (
    <div className="" style={{ height: "100%" }}>
      <div className=" d-flex " style={{ height: "80%" }}>
        <div className="container-fluid d-flex  justify-content-center align-items-center">
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "280%",
            }}
            src={"/img/Shapes/rectangleab.png"}
            alt="Logo"
          />
        </div>
      </div>

      <div
        className=" d-flex justify-content-center align-items-center "
        style={{ height: "20%" }}
      >
        <div className="btn btn-warning btn-lg" onClick={onNext}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Onerectangle;
