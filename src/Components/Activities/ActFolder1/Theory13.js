//import Offcanvas from "./Offcanvas";
//import { Offcanvas } from "bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Headcomp from "../Headcomp";
import Offcanvas from "../Offcanvas";
import BackNextBar from "./BackNextBar";
//import { Link } from "react-router-dom";
//import Headcomp from "../Headcomp";

export default function () {
    const navigate=useNavigate();

   

    function onBack()
    {
      navigate("/activity11/letusverify/theory12");
    }
  return (
    <div>
      <div
        class="container-fluid"
        className=""
        style={{
          height: "122vh",
          backgroundImage: "url(/img/backg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          fontFamily: "Arial",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ marginRight: "5%" }}
        >
          <Link to="/activity11">
            <img
              className="ms-5"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              src={"/Img/homeimg.png"}
              alt="Logo"
            />
          </Link>
          <div className="col-6 col-md-10 me-5 my-3">
            <div
              className="  border border-2 flex-column d-flex justify-content-center align-items-center "
              style={{
                height: "60px",
                borderRadius: "25px",
                background: "#B0C4DE",
                backdropFilter: "blur(5px)",
                marginLeft: "10%",
              }}
            >
              <div className="text-center " style={{ fontSize: "1.4vw",fontFamily:"Arial" }}>
              <span className=" fw-bold" >Area of Triangle : </span>To verify that the triangles on the same base and between the same parallels are equal in area
                {/* <Headcomp/> */}
              </div>
            </div>
          </div>
          <Offcanvas />
        </div>

        <div
          className=" container"
          style={{
            backgroundColor: "white",
            border: "3px solid rgba(255, 255, 255, .5)",
            backdropFilter: "blur(5px)",
            borderRadius: "20px",
            borderColor: "black",
          }}
        >
          <div className="container-fluid">
            <p
              className="text-center"
              style={{ fontSize: "1.8vw", fontWeight: "bold" }}
            >
              Theory
            </p>
            <p className="text-center" style={{ fontSize: "1.5vw" }}>
              Area of Triangles
            </p>
            {/* <p className="" style={{ fontSize: "1.5vw" , fontWeight: "bold"}}>
              Objective :
            </p>
            <ul>
              <li style={{ fontSize: "1.2vw" }}>
                To verify that the triangles on the same base and between the
                same parallels are equal in area.
              </li>
            </ul>
            <p className="" style={{ fontSize: "1.5vw" , fontWeight: "bold" }}>
              Theory :
            </p> */}
            {/* <p className="" style={{ fontSize: "1.5vw" , fontWeight: "bold"}}>
              Triangle :
            </p>
            <ul>
              <li style={{ fontSize: "1.2vw" }}>
                A triangle is one of the basic shapes in geometry: a polygon
                with three corners or vertices and three sides or edges which
                are line segments.
              </li>
            </ul>
            <div className="text-center">
              <img
                className="mt-1 "
                style={{
                  width: "20%",
                  height: "20%",
                  position: "relative",
                }}
                src={"/img/Shapes/triangle1.png"}
                alt="Logo"
              />
            </div>
            <p className="text-center">Fig. (A) Triangle</p> */}
            {/* <p className="" style={{ fontSize: "1.5vw" , fontWeight: "bold"}}>
              Parallel Lines :
            </p>

            <ul>
              <li style={{ fontSize: "1.2vw" }}>
              Parallel lines are lines in a plane that are always the same distance apart. Parallel lines never intersect.
              </li>
              <li style={{ fontSize: "1.2vw" }}>
              Distance between two parallel lines are always constant.
              </li>
              <li style={{ fontSize: "1.2vw" }}>
              Here , the line PA is parallel to the base BC you can see how triangles can be on same base and between same parallel lines.
              </li>
              <li style={{ fontSize: "1.2vw" }}>
              BC is the common (or same ) base for two triangles ABC and PBC.
              </li>
              <li style={{ fontSize: "1.2vw" }}>
              From the figure we can say that the base (BC) for  both triangle is same/equal  because both triangles mounted on the same base.
              </li>
            </ul>

            <div className="text-center">
            <img
                className="mt-1 "
                style={{
                  width: "20%",
                  height: "20%",
                  position: "relative",
                }}
                src={"/img/Shapes/triangleBase.png"}
                alt="Logo"
              />

            </div>
            <p className="text-center" style={{ fontSize: "1.2vw" }}>  Fig. (B) Two triangles on same base</p> */}
           
            <p style={{ fontSize: "1.2vw" }}>From the figure  we can say that the height of  both triangles is same because 
             triangles are in between two parallel lines and if two lines are parallel then distance is constant. 
             Hence  the height of both triangles is same.</p>


             <div  className="text-center">
             <img
                className="mt-1 "
                style={{
                  width: "15%",
                  height: "15%",
                  position: "relative",
                }}
                src={"/img/Shapes/triangleWithHeight.png"}
                alt="Logo"
              />

             </div>
             <p className="text-center" style={{ fontSize: "1.2vw" }}>  Fig. (C) Two triangles on same base and between same parallels</p>
            

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> Therefore,  AH' =  PH </p>

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> Area of △ ABC = ½ *  BC * AH'</p>

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> Area of △ PBC = ½ *  BC * PH</p>

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> But,  AH'=PH    </p>

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> Area of △ PBC = ½ *  BC * PH    </p>                                                                            

                 <p className="text-center" style={{ fontSize: "1.2vw" }}> Therefore  , <span style={{ fontWeight: "bold"}}>Area of △ ABC =  Area of △ PBC </span> </p>
             
            
          </div>
          <div>
                <BackNextBar setBackward={onBack} ></BackNextBar>
            </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Headcomp from "../Headcomp";

// import { useNavigate } from "react-router-dom";

// import { Button } from "@mui/material";

// const Theory = () => {
//   const navigate = useNavigate();

//   const setBackwardarrow = (e) => {
//     navigate(-1);
//   };

//   const setForwardarrow = (e) => {
//     //navigate(+1);
//     navigate("/activity1/letusverify/theory2");
//   };
//   return (
//     <div
//       className=""
//       style={{
//         height: "100vh",
//         backgroundImage: "url(/img/backg.jpg)",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <Headcomp />

//       <div
//         className=" d-flex justify-content-center align-items-center"
//         style={{ height: "90%" }}
//       >
//         <div
//           className="col-11 bg-light shadow-lg"
//           style={{
//             height: "94%",
//             borderRadius: "20px",
//           }}
//         >
//           <div className=" d-flex justify-content-center" style={{ height: "90%" }}>
//             {/* {flag === false ? <Theory1 /> : <Outlet />}
//             <Link to="/activity1/letusverify/theory/thory2">
//               <button
//                 onClick={() => {
//                   setFlag(true);
//                 }}
//               >
//                 next
//               </button>
//             </Link> */}

//             <div className="fs-5  fw-normal  " style={{ width:"90%" , fontFamily:"Arial"}}>
//               {/* <ul className=" " >   d-flex justify-content-center align-items-center
//                 <li className="">
//                   An Algebraic identity is an equality, which is true for all
//                   values of the variables in the equality. They are also used
//                   for the factorization of polynomials.
//                 </li>
//                 <li className="">
//                   The algebraic equations which are valid for all values of
//                   variables in them are called algebraic identities.
//                 </li>
//                 <li className="">
//                   In this way, algebraic identities are used in the computation
//                   of algebraic expressions and solving different polynomials
//                 </li>
//               </ul> */}

//               <div className="" style={{ height:"15%" }}>
//                  <h4 className="text-center" style={{fontSize:"1.8vw"}}><b>Theory</b></h4>
//                  <h4 className="text-center" style={{fontSize:"1.5vw"}}>Area of Triangles</h4>
//               </div>

//               <div className="" style={{ height:"20%" }}>
//                   <h5 className="" style={{fontSize:"1.5vw"}}><b>Objective : </b></h5>
//                   <label style={{fontSize:"1.2vw"}}>To verify that the triangles on the same base and between the same parallels are equal in area.</label>

//               </div>
//               <div className="" style={{ height:"30%" }}>
//                   <h5 className="" style={{fontSize:"1.5vw"}}><b>Theory : </b></h5>
//                   <h4 className="" style={{fontSize:"1.5vw"}}><b>Triangle : </b></h4>
//                   <label style={{fontSize:"1.2vw"}}>A triangle is one of the basic shapes in geometry a polygon with three corners or vertices and three sides or edges which are line segments.
//                   </label>
//               </div>

//               <div className=" text-center" style={{ height:"35%" , width:"70%"}}>
//               <div style={{ height:"75%" , width:"100%"}}>
//                  <img
//                  className="mt-1 "
//                  style={{
//                  width: "20%",
//                  height: "20%",
//                  position: "absolute",
//                  }}
//                  src={"/img/Shapes/triangle1.png"}
//                   alt="Logo"
//                    />
//               </div>

//               <div className=" text-center" style={{ height:"25%" , width:"100%"}}>
//                <label style={{fontSize:"1.1vw"}}>Fig. (A) Triangle</label>

//               </div>

//               </div>

//             </div>

//           </div>
//           <div className=" d-flex" style={{ height: "10%" }}>
//             <div
//               className="col-6 d-flex justify-content-center align-items-center"
//               style={{ height: "100%" }}
//             >
//               <Button
//                 className=""
//                 onClick={setBackwardarrow}
//                 style={{
//                   height: "100%",
//                 }}
//               >
//                 <img
//                   style={{
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     maxHeight: "200%",
//                     maxWidth: "200%",
//                   }}
//                   src={"/img/back.png"}
//                   alt="Logo"
//                 />
//               </Button>
//             </div>
//             <div
//               className=" col-6 d-flex justify-content-center align-items-center"
//               style={{ height: "100%" }}
//             >
//               <Button
//                 className=""
//                 style={{ height: "100%" }}
//                 onClick={setForwardarrow}
//               >
//                 <img
//                   className=""
//                   style={{
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     maxHeight: "200%",
//                     maxWidth: "200%",
//                   }}
//                   src={"/img/next.png"}
//                   alt="Logo"
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Theory;
