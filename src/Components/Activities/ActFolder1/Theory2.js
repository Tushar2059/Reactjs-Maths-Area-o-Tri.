import React from "react";
import Headcomp from "../Headcomp";

import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const Theory2 = () => {
  const navigate = useNavigate();

  const setBackwardarrow = (e) => {
    navigate(-1);
  };

  const setForwardarrow = (e) => {
    navigate(+1);
  };
  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(/img/backg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "90%" }}
      >
        <div
          className="col-11 bg-light shadow-lg"
          style={{
            height: "94%",
            borderRadius: "20px",
          }}
        >
          <div className=" d-flex justify-content-center" style={{ height: "90%" }}>
            {/* {flag === false ? <Theory1 /> : <Outlet />}
            <Link to="/activity1/letusverify/theory/thory2">
              <button
                onClick={() => {
                  setFlag(true);
                }}
              >
                next
              </button>
            </Link> */}

            <div className="fs-5  fw-normal  " style={{ width:"90%" , fontFamily:"Arial"}}>
              {/* <ul className=" " >   d-flex justify-content-center align-items-center
                <li className="">
                  An Algebraic identity is an equality, which is true for all
                  values of the variables in the equality. They are also used
                  for the factorization of polynomials.
                </li>
                <li className="">
                  The algebraic equations which are valid for all values of
                  variables in them are called algebraic identities.
                </li>
                <li className="">
                  In this way, algebraic identities are used in the computation
                  of algebraic expressions and solving different polynomials
                </li>
              </ul> */}

              {/* <h4 className="text-center" style={{fontSize:"1.8vw"}}><b>Theory</b></h4><br/>
              <h4 className="text-center" style={{fontSize:"1.5vw"}}>Area of Triangles</h4>
              
              <h5 className="" style={{fontSize:"1.8vw"}}><b>Objective : </b></h5>
              <label>To verify that the triangles on the same base and between the same parallels are equal in area.</label><br></br>
           
              <h5 className="" style={{fontSize:"1.8vw"}}><b>Theory : </b></h5><br></br>

              <h5 className="" style={{fontSize:"1.8vw"}}><b>Triangle : </b></h5>
              <label>A triangle is one of the basic shapes in geometry: a polygon with three corners or vertices and three sides or edges which are line segments.
              </label>
              
              <div className="text-center bg-info">
                 <img
                 className="mt-5 a"
                 style={{
                 width: "20%",
                 height: "20%",
                 position: "absolute",
                 }} 
                 src={"/img/Shapes/triangle1.png"}
                  alt="Logo"
                   />
              </div> */}

              
              <div className="" style={{ height:"40%" }}>
                  <h5 className="" style={{fontSize:"1.5vw"}}><b>Parallel Lines : </b></h5>
                  <label style={{fontSize:"1.2vw"}}>
                  Parallel lines are lines in a plane that are always the same distance apart. Parallel lines never intersect.
                  </label>
                  <label style={{fontSize:"1.2vw"}}>
                    Distance between two parallel lines are always constant.

                  </label>
                  
                 <label style={{fontSize:"1.2vw"}}>
                  Here , the line XY is parallel to the base BC you can see how triangles can be on same base and between same parallel lines.
                 </label>

                 <label style={{fontSize:"1.2vw"}}>BC is the common (or same ) base for two triangles ABC and DBC.</label>
                  
                  <label style={{fontSize:"1.2vw"}}>

                  From the figure we can say that the base (BC) for  both triangle is same/equal  because both triangles mounted on the same base.
                  </label>
           
              </div>
              <div className="" style={{ height:"30%" }}>
              <div className=" text-center" style={{ height:"80%" ,width:"70%" }}>

                <img
                 className="mt-1 "
                 style={{
                 width: "20%",
                 height: "20%",
                 position: "absolute",
                 }} 
                 src={"/img/Shapes/triangleBase.png"}
                  alt="Logo"
                   />
              </div>
              <div className=" text-center" style={{ height:"20%" }}> 
              <p className="mt-3" style={{fontSize:"1.1vw"}}>Fig. (B) Two triangles on same base</p></div>
              
              </div>

              <div className=" " style={{ height:"30%" , width:"100%"}}>
              <div className="  mt-3"  style={{ height:"75%" , width:"100%"}}>
                <p style={{fontSize:"1.2vw"}}>From the figure  we can say that the height of  both triangles is same because  
                triangles are in between two parallel lines and if two lines are parallel then distance is constant .
                 hence  the height of both triangles is same .</p>
              </div>

              
              
              </div>
             
            </div>

            
          </div>
          <div className=" d-flex" style={{ height: "10%" }}>
            <div
              className="col-6 d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <Button
                className=""
                onClick={setBackwardarrow}
                style={{
                  height: "100%",
                }}
              >
                <img
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    maxHeight: "200%",
                    maxWidth: "200%",
                  }}
                  src={"/img/back.png"}
                  alt="Logo"
                />
              </Button>
            </div>
            <div
              className=" col-6 d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <Button
                className=""
                style={{ height: "100%" }}
                onClick={setForwardarrow}
              >
                <img
                  className=""
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    maxHeight: "200%",
                    maxWidth: "200%",
                  }}
                  src={"/img/next.png"}
                  alt="Logo"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory2;