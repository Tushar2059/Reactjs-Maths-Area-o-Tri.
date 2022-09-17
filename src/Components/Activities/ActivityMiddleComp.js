import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Toolselect1 from "./ActFolder1/Toolselect1";
import Line from "./Line";
import workbench1 from "../../Img/workbench1.png";
import tools1 from "../../Img/tools1.png"


export const UserContext = createContext(null);



const ActivityMiddleComp = () => {
  const [flag, setFlag] = useState(false);
  const [len, setLen] = useState();
  const [bre, setBre] = useState();

  const [toolvisible, setToolvisible] = useState("visible");
  
  let [flag1, setFlag1] = useState("parent");

   
  //console.log("In middlecomp**************"+localStorage.getItem("Aperpen"))
 // console.log("In middlecomp**************"+flag1);
 // if(localStorage.getItem("Aperpen")==10)

  // const update =(event) =>{
  //   alert("update in midddlecomp");
  //   if(flag1)
  //   {
  //     flag1=event;
  //     setFlag1(flag1);
  //   }
  //   else{
  //     flag1=true;
  //     setFlag1(flag1);
  //   }
    
  // }
 
  return (
    <div className="" style={{ height: "100%" }}>
    
      <img
        className="mt-5 ms-4"
        style={{
          width: "8%",
          height: "6%",
          position: "absolute",
        }}
        src={workbench1}
        alt="Logo"
      />
      <div
        className="col-11 bg-light d-flex "
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="d-flex align-items-end"
          style={{ height: "100%", width: "7%" }}
        >
          <button disabled={(flag1=="child") ? false:true}
          className="bg-light"
            onClick={() => {
              setFlag(!flag);
            }}
            style={{visibility: `${toolvisible}`, border :"none",borderBottomLeftRadius: "20px", }}
          >
            <img  
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth:"100%"
              }}
              src={tools1}
              alt="Logo"
            />
          </button>
        </div>

        <div
          className=""
          id="shapesdiv"
          style={{ height: "100%", width: "93%" }}
        >
          {/* //middle component rendering area */}
          <UserContext.Provider value={{ flag, setFlag }}>
            {flag ? (
              <Toolselect1 />
            ) : (
              <Outlet
                context={{
                  len,
                  setLen,
                  flag1,
                  setFlag1,
                  bre,
                  setBre,
                  setToolvisible,
                }}
              />
            )}
          </UserContext.Provider>

          <div
            className=" "
            style={{ height: "100%",width:"100%" }}
          >

            {flag ? <Outlet /> : <Line changeFlag={flag1 => setFlag1(flag1)}></Line>} 
            {/* //color={"black"} flag={show}  */}

            
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default ActivityMiddleComp;




//disabled={(localStorage.getItem("Aperpen")==10) ? false:true}


















// import { padding } from "@mui/system";
// import React, { createContext, useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";

// import Toolselect1 from "./ActFolder1/Toolselect1";
// import { BaseLine } from "./BaseLine";
// import Line from "./Line";

// export const UserContext = createContext(null);

// const ActivityMiddleComp = () => {
//   const [flag, setFlag] = useState(false);
//   const [show, setShow] = useState(0);
//   const navigate = useNavigate();
  
//   function reset()
//   {
//     localStorage.clear();
//     navigate("/activity1/letusverify/");
//   }

//   var [flag1,setFlag1]=useState(0);
//   //var [flag2,setFlag2]=useState(false);

  

//   // useEffect(()=>{ 
//   //   if (localStorage.getItem("Aperpen") == 10 )
//   //   {
    
//   //     flag1= 1;
//   //     setFlag1(flag1);
//   //     console.log("flag1 called"); 
    
//   //   //  else {
//   //   //   flag1 = true;
//   //   //   setFlag1(flag1);
//   //   // }
//   // }},[]);
  
//   const update =(event) =>{
//     console.log("update function called in mid comp");
//     flag1=event.target.value;
//     setFlag1(flag1);
//   }

  

//   return (
//     <div
//       className="justify-content-center align-items-center "
//       style={{ height: "100%" }}
//     >
//       <img
//         className="mt-5 ms-4"
//         style={{
//           width: "8%",
//           height: "6%",
//           position: "absolute",
//         }}
//         src={"/img/workbench.png"}
//         alt="Logo"
//       />
//       <div
//         className="col-11 bg-light d-flex align-items-end flex-column "  // whole workbench div
//         style={{
//           height: "95%",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
//           display: "block",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//       {/* ***************************** */}
//         <div
//           className="container-fluid "
//           id="shapesdiv"
//           style={{ height: "70%" }}
//         >
//           {/* //middle component rendering area */}

//           {/* <Line  name={"M"}></Line>

//           <Line  name={"L"}></Line> */}

//           <UserContext.Provider value={{ flag, setFlag }}>
//             {flag ? <Toolselect1 /> : <Outlet />}
//           </UserContext.Provider>

//           <div
//             className=" "
//             style={{ height: "100%",width:"100%" }}
//           >

//             {flag ? <Outlet /> : <Line  color={"black"} flag={show} update={update}></Line>}  

            
//           </div>
         

          
//         </div>

//         <div className=" container-fluid  d-flex " style={{ height: "30%" }}>
//           <div
//             className="col-2  d-flex align-items-end"
//             style={{ textDecoration: "none" }}
//           >
//           <button disabled={ (flag1==1) ?  true:false}
//               className="bg-light d-flex justify-content-end "
//               onClick={() => {
//                 setFlag(!flag);
//                 setShow(1);
//               }}
//               style={{ height: "100px", width: "100px", border: "none" }}  
//             >
//               <img
//                 className=""
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   height: "100px",
//                   width: "100px",
//                 }}
//                 src={"/img/tools.png"}
//                 alt="Logo"
//               />
//             </button> 
//           </div>

//           <div className=" col-8 d-flex" style={{}}>
//             <div className="col-4 d-flex align-items-center justify-content-center">
//               <img
//                 className="mt-5"
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   maxHeight: "100%",
//                   height: "85px",
//                 }}
//                 src={"/img/back.png"}
//                 alt="Logo"
//               />
//             </div>
//             <div className="mt-5 col-4 d-flex align-items-center justify-content-center">
//               {/* <div
//                 className="btn btn-outline-primary shadow fs-3 fw-bold mt-5 border d-flex justify-content-center align-items-center"
//                 style={{
//                   height: "50px",
//                   width: "200px",
//                   borderRadius: "50px",
//                   background: "",
//                 }}
//               >
//                 Start
//               </div> */}
//               {/* <button type="button" className="btn btn-primary " onClick={reset}>Reset</button> */}
//             </div>
//             <div className="col-4 d-flex align-items-center justify-content-center">
//               <img
//                 className="mt-5"
//                 style={{
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   maxHeight: "100%",
//                   height: "85px",
//                 }}
//                 src={"/img/next.png"}
//                 alt="Logo"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityMiddleComp;
