import { Button } from "@mui/material";
import React from "react";
import back from "../../../Img/back.png"
import next from "../../../Img/next.png"

const BackNextBar = ({ setBackward, setForward }) => {
  return (
    <div className=" d-flex " style={{ height: "10%" }}>
      <div
        className="mb-3  col-6 d-flex justify-content-center align-items-center"
        style={{}}
      >
        <Button
          onClick={setBackward}
          style={{
            height: "100%",
          }}
        >
          <img className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //maxHeight: "200%",
              maxWidth: "5.0vw",
            }}
            src={back}
            alt="backbtn"
          />
        </Button>
      </div>
      <div
        className="mb-3 col-6 d-flex justify-content-center align-items-center"
        style={{}}
      >
        <Button style={{ height: "100%" }} onClick={setForward}>
          <img
            className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
             // maxHeight: "200%",
              maxWidth: "5.0vw",
            }}
            src={next}
            alt="nextbtn"
          />
        </Button>
      </div>
    </div>
  );
};

export default BackNextBar;