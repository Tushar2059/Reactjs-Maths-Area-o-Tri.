import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { rezContext } from './ActFolder1/Act1startpage';
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


export const BaseLine = (props) => {

    //for instructions setArv(); function
    const { arv, setArv } = useContext(rezContext);

  var [areaABC,setAreaABC]=useState(0);
  var [areaPBC,setAreaPBC]=useState(0);

  //states to store values of each input field

  var [baseBC1,setBaseBC1]=useState(0);
  var [baseBC2,setBaseBC2]=useState(0);

  var [heightA,setHeightA]=useState(0);
  var [heightP,setHeightP]=useState(0);

//states for store area
var [areaABC,setAreaABC]=useState(0);
var [areaPBC,setAreaPBC]=useState(0);

//for result
 var [result,setResult] = useState(false);

 const navigate = useNavigate();

  const onBase1 = (e)=>
  {
    if(e.target.value>0 && e.target.value<10)
    {
      baseBC1=e.target.value;
      setBaseBC1(baseBC1);
    }
    else{
      toast.error("Please measure correct base!", {
        position: "top-center",
        autoClose: 1700,
      });
    }
    
  }

  const onBase2 = (e)=>
  {
    if(baseBC1==e.target.value && e.target.value>0)
    {
      baseBC2=e.target.value;
       setBaseBC2(baseBC2);
      //  toast.success("Good You are right", {
      //   position: "top-center",
      //   autoClose: 1700,
      // });
    }
       
       else{
        toast.error("Please measure correct base!", {
          position: "top-center",
          autoClose: 1700,
        });
       }
  }

  const onHeight1 = (e)=>
  {
    if(e.target.value>0 && e.target.value<6)
    {
     heightA=e.target.value;
     setHeightA(heightA);
     calculateArea1(baseBC1,heightA); 
    }
    else{
      toast.error("Please measure correct Height!", {
        position: "top-center",
        autoClose: 1700,
      });
    }
    
  }

  const onHeight2 = (e)=>
  {
    if(heightA==e.target.value && e.target.value>0 && baseBC2>0)
    {
      heightP=e.target.value;
      setHeightP(heightP);
      calculateArea2(baseBC2,heightP);
      setArv(12);
      setResult(true);
      toast.success("Activity completed successfully", {
        position: "top-center",
        autoClose: 1700,
      });
    }
    else{
      toast.error("Please mease correct height!", {
        position: "top-center",
        autoClose: 1700,
      });
     }
      
  }



  //calculateArea();

  function calculateArea1(base,height)
  {
      areaABC = (0.5 * (base)  * (height) );
      setAreaABC(areaABC);
      // areaPBC = (0.5 * (props.base)  * (props.height2) );
      // setAreaPBC(areaPBC);
  }
  function calculateArea2(base,height)
  {
    areaPBC = (0.5 * (base)  * (height) );
    setAreaPBC(areaPBC);
      // areaPBC = (0.5 * (props.base)  * (props.height2) );
      // setAreaPBC(areaPBC);
  }

  const restart = ()=>
  {
    localStorage.clear();
    navigate("/activity11/letusverify");
  }
  return (
    <div className='' style={{height:"100%" ,fontFamily:"Arial"  }}>
        <div className='  col-12 flex-column d-flex justify-content-center align-content-end 'style={{width:"100%"}}>
              
               <p style={{fontFamily:"Arial"  ,fontSize:"1.2vw" ,fontWeight:"bold" }}>Area of Triangle = 1/2 * Base * Height</p>
               <p style={{fontFamily:"Arial"  ,fontSize:"1.2vw" }}>∆ABC = 1/2 * BC * AH'= 1/2 * <input type="number" style={{ width: "15%" }} placeholder="Base(BC)" onBlur={onBase1}></input> * <input type="number" style={{ width: "15%" }} placeholder="Height(AH')" onBlur={onHeight1}></input> = {areaABC.toFixed(2)} square units</p>
               
              
               <p style={{fontFamily:"Arial"  ,fontSize:"1.2vw" }}>∆PBC = 1/2 * BC * PH= 1/2 * <input type="number" style={{ width: "15%" }} placeholder="Base(BC)" onBlur={onBase2}></input> * <input type="number" style={{ width: "15%" }} placeholder="Height(PH)" onChange={onHeight2}></input> = {areaPBC.toFixed(2)} square units</p>
              
              {/* {result && (<p>Therefore, Area  of ∆ABC = Area of ∆PBC</p>)}  */}
             <div className='d-flex justify-content-center ' style={{marginLeft:"50%" , marginTop:"2%"}}>
              <span className=''><Button className='d-flex align-items-center' variant="contained" style={{fontFamily:"Arial"  ,fontSize:"1.0vw",width:"80%" }} onClick={restart}>  Restart </Button>
              </span>
             </div>
               
          

               

              
        </div>

    </div>
  )
}

