import React from "react";
import Headcomp from "../Headcomp";
import "../ActFolder1/Mid.css";
import backgroundImg from "../../../Img/backg.jpg";
import triangle from "../../../Img/Shapes/triangle1.png"
import triangleBase from "../../../Img/Shapes/triangleBase.png"
import triangleWithHeight from "../../../Img/Shapes/triangleWithHeight.png"

import { useNavigate } from "react-router-dom";
import { fontSize } from "@mui/system";

const Theory = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onNext = (e) => {
    navigate("/letusverify/recttheory");
  };

  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
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
          <div
            className="overflow-auto scrollbar-primary ms-5"
            style={{ height: "100%" }}
          >
            <div className="my-5" style={{ width: "93%" }}>
              <h6 className="fw-bold">Objective</h6>
              <p>
                To verify that the triangles on the same base and between the
                same parallels are equal in area.
              </p>
              <h6 className="fw-bold">Theory</h6>
              <h6 className="fw-bold">Triangle</h6>
              <p>
                A triangle is one of the basic shapes in geometry a polygon with
                three corners or vertices and three sides or edges which are
                line segments. See Fig. (A).
              </p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  style={{
                   // maxHeight: "100%",
                   // maxWidth: "50%",
                    // marginTop: "10%",
                    // marginLeft: "25%",
                    maxWidth: "12rem",
                    //height:"17rem"
                  }}
                  src={triangle}
                  alt="Logo"
                  //onClick={handleChange}
                />
                <p className="fw-bold"> Fig. (A) A Triangle</p>
              </div>
              <h6 className="fw-bold">Parallel Lines</h6>
              <ul>
                <li>Parallel lines are lines in a plane that are always at the same distance apart. Parallel lines never intersect.</li>
                <li>Distance between two parallel lines is always constant.</li>
                <li>In Fig. (B), the line PA is parallel to the line BC. Here you can see how triangles can be on same base and between the same parallel lines.</li>
                <li>BC is the common (or same) base for two triangles ABC and PBC in Fig. (B).</li>
                <li>From the figure we can say that the base (BC) for both triangles is same/equal because both triangles are mounted on the same base.</li>
                
                
              </ul>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  style={{
                   // maxHeight: "100%",
                   // maxWidth: "50%",
                    // marginTop: "10%",
                    // marginLeft: "25%",
                    maxWidth: "12rem",
                    //height:"17rem"
                  }}
                  src={triangleBase}
                  alt="Logo"
                  //onClick={handleChange}
                />
                <p className="fw-bold">Fig. (B) Two triangles on same base</p>
              </div>

              <p>
              From the Fig. (C), we can also say that the height of both triangles is same 
              because triangles are in between two parallel lines and if two lines are parallel
               then distance between them is constant. 
               Thus, the height of both triangles is same .

              </p>
              
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  style={{
                   // maxHeight: "100%",
                   // maxWidth: "50%",
                    // marginTop: "10%",
                    // marginLeft: "25%",
                    maxWidth: "12rem",
                    //height:"17rem"
                  }}
                  src={triangleWithHeight}
                  alt="Logo"
                  //onClick={handleChange}
                />
                <p className="fw-bold"> Fig. (C) Two triangles on same base and between same parallels</p>
              </div>
              {/* <h6>Algebraic Identity</h6>
                <ul>
                  {" "}
                  <li>
                    An Algebraic identity is an equality, which is true for all
                    values of the variables in the equality.
                  </li>
                  <li>
                    The algebraic equations which are valid for all values of
                    variables in them are called algebraic identities.
                  </li>
                  <li>
                    In this way, algebraic identities are used in the
                    computation of algebraic expressions and solving different
                    polynomials
                  </li>
                  <li>
                    Algebraic identities are also used for the factorization of
                    polynomials.
                  </li>
                </ul>
                <h6>Pre-requisite Knowledge</h6>
                <h6>Square</h6>
                <p>
                  A square is a regular quadrilateral, which means that it has
                 </p>
                <p>Area of a Square</p>
                <ul>
                  <li>The product of the length of each side itself.</li>
                  <li> Formula : Area = side²</li>
                </ul>

                <h6>Rectangle</h6>
                <p>
                  rectangle is a quadrilateral with four right angles and
                  opposite sides are equal. The length of a rectangle is the
                  size of the longer side, whereas the breadth is the size of
                  the shorter side
                </p>
                <p>Area of a Rectangle</p>
                <ul>
                  <li>The product of its length and breadth</li>
                  <li>Formula : Area = length x breadth</li>
                </ul>  four equal sides and four equal angles of 90 degrees each.
                */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;
