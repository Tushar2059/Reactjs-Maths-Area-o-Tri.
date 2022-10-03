import React from "react";
import { Link } from "react-router-dom";
import exp1 from "../../Superscript";
import backg from "../../../Img/backg.jpg"

const Activity1 = () => {
  return (
    <div
      className="flex-column d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url("+ backg +")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily:"Arial"
      }}
    >
      <div
        className="col-12 col-md-9 border border-light border-2 "
        style={{
          height: "75vh",
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div
          className="mt-3 d-flex justify-content-center align-items-center fs-2.5vw fw-bolder "
          style={{ height: "5vh", color: "#ac3843" ,fontSize:"2.5vw" }}
        >
        {/* Area of Triangles */}
        Area of a triangles - same base and same parallels
        </div>
        <div className="" style={{ height: "20vh" }}>
          <div
            className="d-flex justify-content-center align-items-center fs-2.0vw fw-bolder"
            style={{ height: "15vh" , fontSize:"2.0vw"}}
          >
            Objective:
          </div>
         <div className="col-12 d-flex justify-content-center">
          <div
            className="d-flex col-10 justify-content-center align-items-center  fw-normal text-center"
            style={{ height: "5vh" ,fontSize:"1.8vw" ,fontFamily:"Arial"}}
          >
            {/* {exp1()} */}
            To verify that the triangles on the same base and between the same parallels are equal in area.
          </div></div>
        </div>
        <div className="" style={{ height: "33vh" }}>
          <div
            className="d-flex justify-content-center align-items-center fs-2.0vw fw-bolder"
            style={{ height: "20vh" ,fontSize:"2.0vw"}}
          >
            Learning Outcome:
          </div>
          <div className="col-12 d-flex justify-content-center">
          <div
            className="d-flex col-10 justify-content-center align-items-center fs-1.5vw fw-normal text-center"
            style={{ height: "1vh" ,fontSize:"1.5vw",fontFamily:"Arial"}}
          >
           Students will be able to verify that the triangles on the same base and between 
            the same parallels are equal in area.
          
            
          </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center fs-2.0vw"
          style={{ height: "10vh" }}
        >
          <Link to="/activity11/letusverify">
            <div
              className="btn px-5  mb-5"
              style={{
                fontFamily: "Arial",
                fontWeight: "700",
                
                background: " #eeeee6",
                color: "#5f5299",
                borderRadius: "50px",
                boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
                fontSize:"2.0vw"
              }}
            >
              Start
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activity1;