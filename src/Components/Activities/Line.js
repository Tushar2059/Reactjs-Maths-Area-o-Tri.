import { dividerClasses, Link } from "@mui/material";
import { fontWeight, textAlign, textTransform } from "@mui/system";
//import { Button } from "bootstrap";
import React, { useRef, useEffect, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { rezContext } from "./ActFolder1/Act1startpage";
import { current } from "@reduxjs/toolkit";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import Draggable from "react-draggable";
import { BaseLine } from "./BaseLine";
import BackNextBar from "./ActFolder1/BackNextBar";
import { Observation } from "./Observation";
import { toast } from "react-toastify";
import ssquare3 from "../../Img/Shapes/ssquare3.png"
//  import './Line.css'

function Line(props) {
  //const { setToolvisible } = useOutletContext();
  
 // const {setFlag1}=useOutletContext();

  //flag for color in triangle

  var [flagR, setR] = useState(false);
  var [flagG, setG] = useState(false);

  var [message,setMessage] = useState("");

  const navigate = useNavigate();
  var a = 7;
  let [image, setImage] = useState(null);
  let [check, setCheck] = useState(0);
  const canvas = useRef();
  let ctx = null;
  let [countL, setCountL] = useState(0);
  let [countMC, setCountMC] = useState(0);

  var [perpendicular, setPer] = useState(0);

  //validations for input field
  const [isValid1, setIsValid1] = useState(false);
  const [isValid2, setIsValid2] = useState(false);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  //for drawing triangles on Button

  const [drawABC, setDrawABC] = useState(false);
  const [drawPBC, setDrawPBC] = useState(false);


  var [countForDraw , setCountForDraw] = useState(true);
 

 

 

  //for instructions setArv(); function
  const { arv, setArv } = useContext(rezContext);
  //coordinates for each point A , B , C , D

  let [pointA, setpointA] = useState([0, 0]);
  let [pointB, setpointB] = useState([0, 0]);
  let [pointC, setpointC] = useState([0, 0]);
  let [pointP, setpointP] = useState([0, 0]);

  let [array, setArray] = useState([
    { pointax: 0, pointay: 0 },
    { pointbx: 0, pointby: 0 },
    { pointcx: 0, pointcy: 0 },
    { pointpx: 0, pointpy: 0 },
  ]);

  // initialize the canvas context
  //**********  Creating Canvas  *********//
  useEffect(() => {

    // dynamically assign the width and height to canvas
    if(check==0)
    setMessage("Two parallel lines are given. Line L and line M.");
    const canvasEle = canvas.current;
    canvasEle.width = 500;
    canvasEle.height = 220;
    // canvasEle.width = canvasEle.innerWidth;
    // canvasEle.height = canvasEle.innerHeight;
    //canvasEle.width = canvasEle.clientWidth * 1.67;
    //canvasEle.height = canvasEle.clientHeight * 1.47;
   //canvasEle.height = canvasEle.clientHeight * 2;

    //console.log("width of canvas" + canvasEle.clientWidth );
    //console.log("height of canvas" + canvasEle.clientHeight );
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    drawLine({ x: 100, y: 30, x1: 400, y1: 30 }, { color: props.color });
  }, []);

  // to draw 2 line L and M parallel to each other
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = props.color, width = 2 } = style;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    
    ctx.font = "18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black"; // a color name or by using rgb/rgba/hex values
    ctx.fillText("M", 80, 30);
    //ctx.fillText('U', 240, 10); // text and position

    ctx.beginPath();
    ctx.moveTo(x, 150);
    ctx.lineTo(x1, 150);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    ctx.font = "18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black"; // a color name or by using rgb/rgba/hex values
    ctx.fillText("L", 80, 150);
  };

  //*********  this useEffect is for line M events  *********//
  useEffect(() => {
    //setToolvisible("hidden");
    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;
      console.log("countForDraw 123654 " + countForDraw);
      //alert(mouseX +" | "+ mouseY);
      // if(mouseY==10 && countMC<2)     //(mouseY<=31 && mouseY>=29)  && countForDraw==1
      if ((mouseY <= 32 && mouseY >= 28 && countMC == 1 && mouseX > 99 && mouseX < 401 && (Math.abs(mouseX-pointA[0]) >= 80 ) ) && localStorage.getItem("checkButton")==1)
       {
        //&& ((pointA[0] - mouseX)>40 || (mouseX-pointA[0])>40 )
        countMC = countMC + 1;
        //console.log("countMC = " + countMC);
        //console.log("clicked for PPPPPPP");

        setArv(4);
        
        // set  coordinates for P point
        setpointP((pointP[0] = mouseX), (pointP[1] = 30));

        array.pointpx = mouseX;
        array.pointpy = 30;
        setArray(array);
       // console.log("Point p coordinates " + pointP[0] + " | " + pointP[1]);
        ctx.beginPath();
        ctx.arc(mouseX, 30, 3, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.font = "18px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "green"; // a color name or by using rgb/rgba/hex values
        ctx.fillText("P", mouseX, mouseY - 15);
        check = check + 1;
        setCheck(check);

        localStorage.setItem("pointP", JSON.stringify(pointP));
        localStorage.setItem("checkCount", check);
       // console.log("check P= " + check);

        //enable button fortrangle PBC
        setDrawPBC(true);

        setTimeout(() => {
        //  console.log("Abcd efgh");
          // ctx.beginPath();
          // ctx.moveTo(pointP[0], 30);
          // ctx.lineTo(pointC[0], pointC[1]);
          // ctx.strokeStyle = "green";
          // ctx.lineWidth = 2;
          // ctx.stroke();
        }, 1000);

        setTimeout(() => {
        //  console.log("Abcd efgh");
          // ctx.beginPath();
          // ctx.moveTo(pointP[0], 30);
          // ctx.lineTo(pointB[0], pointB[1]);
          // ctx.strokeStyle = "green";
          // ctx.lineWidth = 2;
          // ctx.stroke();

          //setMessage("Triangle PBC is formed");
        }, 2000);

        setTimeout(() => {
        //  console.log("Abcd efgh");
          // ctx.beginPath();
          // ctx.moveTo(pointB[0], pointB[1]);
          // ctx.lineTo(pointC[0], pointC[1]);
          // ctx.strokeStyle = "green";
          // ctx.lineWidth = 2;
          // ctx.stroke();

          //setMessage("∆PBC is formed");
        }, 2000);
      }
      //condition for A
      else if ( mouseY <= 32 && mouseY >= 28 && countMC ==0 && countL >= 2 && mouseX > 99 && mouseX < 401 )
      {
        
        //alert("clicked on ine L");
        countMC = countMC + 1;
       // console.log("countMC = " + countMC);

        setpointA((pointA[0] = mouseX), (pointA[1] = 30));

        array.pointax = mouseX;
        array.pointay = 30;
        setArray(array);
        //console.log("Point A coordinates " + mouseX + " | " + mouseY);
        //console.log(
        //  "Point A coordinates using state " + pointA[0] + " | " + pointA[1]
        //);
       

        ctx.beginPath();
        ctx.arc(mouseX, 30, 3, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.font = "18px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "red"; // a color name or by using rgb/rgba/hex values
        ctx.fillText("A", mouseX, mouseY - 15);
        check = check + 1;
        setCheck(check);
        localStorage.setItem("pointA", JSON.stringify(pointA));
        localStorage.setItem("checkCount", check);
       // console.log("check A= " + check);
        setArv(2);
        //setArv(11);
         //for draw triangle button
         //drawABC=true;
         setDrawABC(true);
        // alert(drawABC);
 
       
       

       // setTimeout(() => {
         // console.log("Abcd efgh");
        //  ctx.beginPath();
         // ctx.moveTo(pointA[0], 30);
         // ctx.lineTo(pointC[0], pointC[1]);
         // ctx.strokeStyle = "red";
         // ctx.lineWidth = 2;
        //  ctx.stroke();
       // }, 1000);

       // setTimeout(() => {
          //console.log("Abcd efgh");
          //ctx.beginPath();
        //  ctx.moveTo(pointA[0], 30);
        //  ctx.lineTo(pointB[0], pointB[1]);
        //  ctx.strokeStyle = "red";
        //  ctx.lineWidth = 2;
        //  ctx.stroke();

       //   setMessage("∆ABC is formed");
       // }, 2000);
      } // if end
      else if(countMC == 1 && (Math.abs(mouseX-pointA[0]) < 80 ))
      {
        // alert("distance is less 111");
        toast.error("Keep distance between point A and point P", {
          position: "top-center",
          autoClose: 1700,
        });
      }
    });
  }, []);

  //*********  this useEffect is for line L events  ************//
  useEffect(() => {
    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;
      

      
      if (mouseY <= 152 && mouseY >= 148 && localStorage.getItem("checkCount") != 4 && mouseX > 99 && mouseX < 401)
       {
        

        if (countL == 1  && (Math.abs(mouseX-pointB[0]) >= 80 )) {
          

          countL = countL + 1;
          setCountL(countL);
         // console.log(countL);     

          setpointC((pointC[0] = mouseX), (pointC[1] = 150));

          array.pointcx = mouseX;
          array.pointcy = 150;
          setArray(array);
       
          ctx.beginPath();
          ctx.arc(mouseX, 150, 3, 0, Math.PI * 2);
          ctx.fillStyle = "red";
          ctx.fill();

          ctx.font = "18px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "red"; // a color name or by using rgb/rgba/hex values
          ctx.fillText("C", mouseX, mouseY + 15);
          setArv(1);
          //setMessage("Base BC is drawn on line L.");

          check = check + 1;
          setCheck(check);
          localStorage.setItem("pointC", JSON.stringify(pointC));
          localStorage.setItem("checkCount", check);
        
         
      }
      
      else if (countL ==0) {
        countL = countL + 1;
        setCountL(countL);
        //console.log(countL);     

          setpointB((pointB[0] = mouseX), (pointB[1] = 150));
         
          array.pointbx = mouseX;
          array.pointby = 150;
          setArray(array);
        

          ctx.beginPath();
          ctx.arc(mouseX, 150, 3, 0, Math.PI * 2);
          ctx.fillStyle = "red";
          ctx.fill();

          ctx.font = "18px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "red"; // a color name or by using rgb/rgba/hex values
          ctx.fillText("B", mouseX, mouseY + 15);

          check = check + 1;
          setCheck(check);
          localStorage.setItem("pointB", JSON.stringify(pointB));
          localStorage.setItem("checkCount", check);
       
        }
        else if((Math.abs(mouseX-pointB[0]) < 80 )){
          toast.error("Keep distance between point B and point C", {
            position: "top-center",
            autoClose: 1700,
          });
        }
      }
      
    });
  }, []);

  
  //draw triangle ABC
  function drawTiangleABC() {
       const canvasEle = canvas.current;
    //canvasEle.width = 500;
    //canvasEle.height = 220;
    ctx = canvasEle.getContext("2d");
   

   
      ctx.beginPath();
       ctx.moveTo(array.pointbx , array.pointby);
     
       ctx.lineTo(array.pointcx , array.pointcy);
       ctx.lineTo(array.pointax , array.pointay);
       ctx.lineTo(array.pointbx , array.pointby);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke();
      setMessage("∆ABC is formed");

      //countForDraw=true;
     // setCountForDraw(!countForDraw);            
    //  console.log("countForDraw " +countForDraw);

    localStorage.setItem("checkButton",1);

    setArv(3);
      setDrawABC(false);
    //}
  }

  //draw triangle PBC
  function drawTianglePBC() {

    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    ctx.beginPath();

    ctx.moveTo(array.pointbx , array.pointby);
    ctx.lineTo(array.pointcx , array.pointcy);
    ctx.lineTo(array.pointpx , array.pointpy);
    ctx.lineTo(array.pointbx , array.pointby);

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();

    setMessage("∆PBC is formed");
    localStorage.setItem("checkButton",2);
    setArv(5);
    setDrawPBC(false);
  }
 


  

  //draw all lines if points are already there used local-storage
  useEffect(() => {
    //console.log("in the useeffect of draw lines automatically " + check);

    var storedPointsB = JSON.parse(localStorage.getItem("pointB")); //get them back
    var storedPointsC = JSON.parse(localStorage.getItem("pointC"));
    var storedPointsA = JSON.parse(localStorage.getItem("pointA"));
    var storedPointsP = JSON.parse(localStorage.getItem("pointP"));
    var checkCount = localStorage.getItem("checkCount");

    // console.log("in the useeffect of draw lines automatically" +storedPointsA[0] +"  "+ storedPointsA[1]);

    if (checkCount == 4) {
      // for lines
      
      function line(a, b, c, d, e) {
       
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(c, d);
        ctx.strokeStyle = e;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      line(
        storedPointsB[0],
        storedPointsB[1],
        storedPointsC[0],
        storedPointsC[1],
        "red"
      );
      line(
        storedPointsC[0],
        storedPointsC[1],
        storedPointsA[0],
        storedPointsA[1],
        "red"
      );
      line(
        storedPointsA[0],
        storedPointsA[1],
        storedPointsB[0],
        storedPointsB[1],
        "red"
      );
      line(
        storedPointsP[0],
        storedPointsP[1],
        storedPointsB[0],
        storedPointsB[1],
        "green"
      );
      line(
        storedPointsP[0],
        storedPointsP[1],
        storedPointsC[0],
        storedPointsC[1],
        "green"
      );
      line(
        storedPointsB[0],
        storedPointsB[1],
        storedPointsC[0],
        storedPointsC[1],
        "green"
      );

      //for text A,B,C,D

      function text(a, b, c, d) {
        ctx.font = "18px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = a; // a color name or by using rgb/rgba/hex values
        ctx.fillText(b, c, d);
      }

      text("red", "B", storedPointsB[0], storedPointsB[1] + 15);
      text("red", "C", storedPointsC[0], storedPointsC[1] + 15);
      text("red", "A", storedPointsA[0], storedPointsA[1] - 15);
      text("green", "P", storedPointsP[0], storedPointsP[1] - 15);

      //for arc point
      function point(a, b, c) {
        ctx.beginPath();
        ctx.arc(a, b, 3, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.fill();
      }
      point(storedPointsB[0], storedPointsB[1], "red");
      point(storedPointsC[0], storedPointsC[1], "red");
      point(storedPointsA[0], storedPointsA[1], "red");
      point(storedPointsP[0], storedPointsP[1], "green");

      function lineDash(a, b, c, d) {
        ctx.beginPath();
        
        ctx.moveTo(a, b);
        ctx.lineTo(c, d);
        ctx.strokeStyle = "grey";
        ctx.setLineDash([6, 8]);
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      //if(check==5)
      {
        lineDash(
          storedPointsP[0],
          storedPointsP[1],
          storedPointsP[0],
          storedPointsP[1] + 120
        );
        lineDash(
          storedPointsA[0],
          storedPointsA[1],
          storedPointsA[0],
          storedPointsA[1] + 120
        );

        //text("green", "P", storedPointsP[0], storedPointsP[1] - 15);

        text("grey", "H", storedPointsP[0], storedPointsP[1] + 145); //for P
        text("grey", "H'", storedPointsA[0], storedPointsA[1] + 145); //for A
      }

     
    }
  }, []);

  //for drawing perpendicular on line L

  useEffect(() => {
    var storedPointsB = JSON.parse(localStorage.getItem("pointB")); //get them back
    var storedPointsC = JSON.parse(localStorage.getItem("pointC"));
    var storedPointsA = JSON.parse(localStorage.getItem("pointA"));
    var storedPointsP = JSON.parse(localStorage.getItem("pointP"));
    var checkCount1 = localStorage.getItem("checkCount");

    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;
      // if(pointP[0]==mouseX)
      if (mouseX <= pointP[0] + 5 && mouseX >= pointP[0] - 5 && check == 4 && localStorage.getItem("checkButton")==2) {
        perpendicular = perpendicular + 1;
        setPer(perpendicular); //by default perpendicular is zero
        //setArv();
      }

     
      if (pointP[0] != 0 && perpendicular == 1 ) {
        //if((mouseX==pointP[0] && mouseY==pointP[1]) )//&& (mouseY==storedPointsP[1]))
        if (
          mouseX <= pointP[0] + 5 &&
          mouseX >= pointP[0] - 5 &&
          mouseY <= pointP[1] + 5 &&
          mouseY >= pointP[1] - 5
        ) {
          check = check + 1;
          setArv(6);
          setCheck(check);
          setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(pointP[0], pointP[1]);
            ctx.lineTo(pointP[0], pointP[1] + 120);
            ctx.strokeStyle = "grey";
            ctx.setLineDash([6, 8]);
            ctx.lineWidth = 2;
            
            ctx.stroke();
            ctx.closePath();
            setMessage("Perpendicular PH drawn on line L");

            ctx.font = "20px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "grey"; // a color name or by using rgb/rgba/hex values
            ctx.fillText("H", pointP[0], pointP[1] + 145);
           // console.log("name for perpendicular line");
          }, 1000);

         
        }
      }

     
      if (
        mouseX <= pointA[0] + 5 &&
        mouseX >= pointA[0] - 5 &&
        perpendicular > 0 &&
        check == 5
      ) {

        



        setArv(7);
        setTimeout(() => {
          localStorage.setItem("Aperpen", 10); //all done
          //console.log("In Line**************"+localStorage.getItem("Aperpen"));
          ctx.beginPath();
          ctx.moveTo(pointA[0], pointA[1]);
          ctx.lineTo(pointA[0], pointA[1] + 120);
          ctx.strokeStyle = "grey";
          ctx.setLineDash([6, 8]);
          ctx.lineWidth = 2;
          
          ctx.stroke();
          ctx.closePath();

          setMessage("Perpendicular AH' drawn on line L");

          ctx.font = "20px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "grey"; // a color name or by using rgb/rgba/hex values
          ctx.fillText("H'", pointA[0], pointA[1] + 145);
         // console.log("name for perpendicular line h' ");
            
          changeFlag1();
          
         
        

        }, 1000);

        perpendicular = 0;
        setPer(perpendicular);

        setTimeout(() => {
         // console.log("check point 5 =" + check);

         
        
          // fillTri();
        }, 2000);
      }
    });
  }, []);

  const changeFlag1 = ()=>
  {
    props.changeFlag("child");
  }

  //fill triangle with color

  function fillTri() {
    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;

      if (
        mouseX >= pointC[0] &&
        mouseX <= pointA[0] &&
        mouseY <= pointC[1] &&
        mouseY >= pointA[1]
      ) {
        // && (mouseY<=pointC[1] && mouseY>=pointC[1]))
        ctx.fillStyle = "red";
        ctx.beginPath(); //Begin a path..
        ctx.moveTo(pointA[0], pointA[1]); //Startpoint (x, y)
        ctx.lineTo(pointB[0], pointB[1]); //Point 1 (x, y)
        ctx.lineTo(pointC[0], pointC[1]); //Point 2 (x, y)
        ctx.closePath(); //Close the path. //Fill triangle with previous set color.

        ctx.fill(); //Give triangle a stroke (width: 4 pixels).
      } else if (
        mouseX <= pointB[0] &&
        mouseX >= pointP[0] &&
        mouseY <= pointB[1] &&
        mouseY >= pointP[1]
      ) {
       // console.log("fuunction called");
        ctx.fillStyle = "green";
        ctx.beginPath(); //Begin a path..
        ctx.moveTo(pointP[0], pointP[1]); //Startpoint (x, y)
        ctx.lineTo(pointB[0], pointB[1]); //Point 1 (x, y)
        ctx.lineTo(pointC[0], pointC[1]); //Point 2 (x, y)
        ctx.closePath(); //Close the path. //Fill triangle with previous set color.
        ctx.fill();
      }

      //for 2nd condition

      if (
        mouseX <= pointC[0] &&
        mouseX >= pointA[0] &&
        mouseY <= pointC[1] &&
        mouseY >= pointA[1]
      ) {
        // && (mouseY<=pointC[1] && mouseY>=pointC[1]))
        //console.log("fuunction called");
        ctx.fillStyle = "red";
        ctx.beginPath(); //Begin a path..
        ctx.moveTo(pointA[0], pointA[1]); //Startpoint (x, y)
        ctx.lineTo(pointB[0], pointB[1]); //Point 1 (x, y)
        ctx.lineTo(pointC[0], pointC[1]); //Point 2 (x, y)
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#666666";
        ctx.stroke();
        ctx.closePath(); //Close the path. //Fill triangle with previous set color.
        ctx.fill(); //Give triangle a stroke (width: 4 pixels).
      } else if (
        mouseX >= pointB[0] &&
        mouseX <= pointP[0] &&
        mouseY <= pointB[1] &&
        mouseY >= pointP[1]
      ) {
        //console.log("fuunction called");
        ctx.fillStyle = "green";
        ctx.beginPath(); //Begin a path..
        ctx.moveTo(pointP[0], pointP[1]); //Startpoint (x, y)
        ctx.lineTo(pointB[0], pointB[1]); //Point 1 (x, y)
        ctx.lineTo(pointC[0], pointC[1]); //Point 2 (x, y)

        ctx.closePath(); //Close the path. //Fill triangle with previous set color.
        ctx.fill();
      }
    });
  }
 

  //for coordinates of mouse
  useEffect(() => {
    ctx.canvas.addEventListener("mousemove", (event) => {
      //ctx.clearRect(80,90,160,110);
                  // ctx.clearRect(375, 190, 500, 220);
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;
      ctx.font = "20px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "red"; // a color name or by using rgb/rgba/hex values
      // ctx.fillText(`${mouseX}`, 100 , 100);
      //ctx.fillText(`${ mouseY}`, 150 , 100);
               // ctx.fillText(`${mouseX}`, 410, 200);
                // ctx.fillText(`${mouseY}`, 450, 200);
      //ctx.fillText(`${ mouseY-30}`, 150 , 100);
    });
  }, []);

  useEffect(() => {
    if (check == 5) {
      ctx.canvas.addEventListener("mousemove", (event) => {});
    }
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const eventControl = (event, info) => {
   // console.log("Event name: ", event.type);
   // console.log(event, info);
  };

  var [isDisabled, setDis] = useState(false);
  //  if (localStorage.getItem("imageLoad")==1 && (localStorage.getItem("checkCount")==4))
  if (
    localStorage.getItem("imageLoad") == 1 &&
    localStorage.getItem("Aperpen") == 10
  ) {
   
    localStorage.setItem("imageLoad", 0);
    setArv(8);
    if (!isDisabled) {
      isDisabled = true;
      setDis(isDisabled);
     // console.log("disabled called");
    } else {
      isDisabled = false;
      setDis(isDisabled);
    }
  

   
  }

  var [distBase, setBaseDist] = useState(0);
  var [distHeightH1, setHeightDist1] = useState(0);
  var [distHeightH2, setHeightDist2] = useState(0);
  var storedPointsB = JSON.parse(localStorage.getItem("pointB")); //get them back
  var storedPointsC = JSON.parse(localStorage.getItem("pointC"));
  var storedPointsA = JSON.parse(localStorage.getItem("pointA"));
  var storedPointsP = JSON.parse(localStorage.getItem("pointP"));

 

  
  var [validBase , setValidBase]=useState(false);
  const validateBaseValue = (event) => {

       if(event.target.value>1 && event.target.value<=9)
       {
        validBase=true;
        setValidBase(validBase);
       }
       else
       {
        toast.error("Please Measure correct base !", {
          position: "top-center",
          autoClose: 1700,
        });
       }
       if (storedPointsB[0] < storedPointsC[0]) {
      distBase = storedPointsC[0] - storedPointsB[0];
      //alert("base disatance " + distBase);
      distBase=distBase/(31.86);
        distBase=Number(distBase.toFixed(1));
        setBaseDist(distBase);
    
      }
       else if (pointB[0] > pointC[0]) {
        distBase = storedPointsB[0] - storedPointsC[0];
        distBase=distBase/(31.86);
        distBase=Number(distBase.toFixed(1));
        setBaseDist(distBase);
      
      
    }

  }


  const validateHeightValue1 = (event) => {

     if (event.target.value > 0 && event.target.value <= 5 ) {
      distHeightH1=event.target.value;
      setArv(9);
      setIsValid1(true);
      setMessage1(""); 
      //distHeightH1 = event.target.value;
      setHeightDist1(distHeightH1);
      //setHeightDist2(distHeightH1);
      //alert("ok");
    }
    else {
      setIsValid1(false);
      setMessage1('Please measure correct height!');
      
      toast.error("Please measure correct height!", {
        position: "top-center",
        autoClose: 1700,
      });
      

    }
   
  };

  const validateHeightValue2 = (event) => {
   // if (distHeightH1==event.target.value && (distHeightH1==4 || distHeightH1==3.9  || distHeightH1==4.1  ))
   if (distHeightH1==event.target.value)
     {
      distHeightH2 = event.target.value;
      setHeightDist2(distHeightH2);
      setIsValid2(true);
      setMessage2(""); 
      //setHeightDist2(distHeightH1);
      //alert("ok");
    }else {
      setIsValid2(false);
      setMessage2('Please measure correct height!');

      toast.error("Height AH' and PH must be same", {
        position: "top-center",
        autoClose: 1700,
      });
    }
  };


 var [ifNext , setIfNextFlag] = useState(false);
  var [isDisabledCanvas, setCanvas] = useState(true);

  var [countNext , setCountNext] = useState(0);
  //var [isDisabledCanvas , setCanvas] = useState(true);
 var [isDisabledForCon,setIsDisabledForCon]=useState(false);

 var [measureFlag,setMeasureFlag]=useState(true);

 var [msg ,setMsg] =useState(true);


  const onNext = () => {
    
    if(distHeightH1 >0  && distHeightH2 > 0 && countNext==0 && validBase==true)
    {
      //alert(countNext);
      countNext=countNext+1;
      setCountNext(countNext); 
      isDisabledForQ=false;
      setIsDisabledForQ(isDisabledForQ);
      ifNext=true;
      setIfNextFlag(ifNext);
      if (isDisabledCanvas) 
      isDisabledCanvas = false;
      setCanvas(isDisabledCanvas);
      isDisabled=false;
      setDis(isDisabled);
      //setArv(12);

      setMsg(false);

  
    
  }

     else if(countNext==1){
     // isDisabled=true;
      //setDis(isDisabled);
      setCanvas(!isDisabledCanvas);
      isDisabledForCon=true;
      setIsDisabledForCon(isDisabledForCon);
      countNext=countNext+1;
      setCountNext(countNext);
      setDis(true);
      setMeasureFlag(false);
      setArv(11);
   
    }
    


  
  };

  const onBack = ()=>{
    if(countNext==2)
    {
   
    countNext=countNext-1;
    setCountNext(countNext);
    isDisabledCanvas=false;
    setCanvas(isDisabledCanvas);
    setIsDisabledForCon(false);
    setDis(!isDisabled);
    setArv(10);
    }
    else{
       
      navigate("/activity11/letusverify");
    }
    
  }

  var [isDisabledForQ , setIsDisabledForQ]=useState(false);
  const onFocusForObs = ()=>
  {
    isDisabledForQ=true;
    setIsDisabledForQ(isDisabledForQ);
  }

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      //ctx.clearRect(0,0,500,300);
      localStorage.clear();
      
    });
  }, []);


  

  return (
    <div className="" style={{ height: "100%" ,fontFamily:"Arial"}}>
      <div className="" style={{ height: "90%" }}>
        <div className="d-flex " style={{ height: "60%" }}>
          <div className="mt-5 col-3">
            {isDisabled && (
              <Draggable id="img1">
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    maxHeight: "100%",
                    //height: "150px",
                   // width: "333px",
                   //height: "23vh",
                    //width: "24.5vw",

                  }}
                  src={ssquare3}
                  alt="Logo"
                />
              </Draggable>
            )}

            {/* {!isDisabled && !isDisabledCanvas && (<h3 className="text-dark mt-5">Conclusion :</h3>)} */}
          </div>

          <div  className="mt-3 col-5 bg-inf d-flex justify-content-center align-items-center " style={{fontSize:"1.2vw"}}>
            <canvas id="cloc" ref={canvas} style={{ border: "0px solid "  }}></canvas>
          </div>

          <div className=" col-4 " >
            {isDisabled && measureFlag && (
              <div
                className=" col-6 d-flex flex-column justify-content-center align-items-end  "
                style={{ height: " 100%", width: "80%", marginLeft: "2rem" }}
              >
                <p className="text-center fs-1.2vw col-12" style={{fontSize:"1.2vw" ,fontWeight:"bold" }}>Measurements</p>

                <div className="flex-column fs-1.2vw">
                  <div className="">
                    <label style={{fontSize:"1.2vw"}}>
                      Length of Base BC &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;
                      <input
                        type="number"
                        style={{ width: "20%" }}
                        onBlur={validateBaseValue}
                      ></input>{" "}
                      {/* {Math.abs(Number(((storedPointsC[0] - storedPointsB[0]))/31.86).toFixed(1))}&nbsp;&nbsp;&nbsp; &nbsp; */}
                      units{" "}
                    </label>
                    <br></br>
                  </div>

                  <div className="mt-2 fs-1.2vw">
                    <label style={{fontSize:"1.2vw"}}>
                      Length of height PH &nbsp;&nbsp;:&nbsp; &nbsp;
                      <input
                        type="number"
                        style={{ width: "20%" }}
                        onBlur={validateHeightValue1}
                        className=""
                      ></input>{" "}
                      units{" "}

                    </label>
                    {/* <div className={`message1 ${isValid1 ? 'success' : 'error'}`} style={{color:"tomato" ,fontSize:"1.0vw"}}>
                    {message1}
                    </div> */}
                    <br></br>
                  </div>

                  <div className="mt-2 fs-1.2vw">
                    <label style={{fontSize:"1.2vw"}}>
                      Length of height AH' &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                      <input
                        type="number"
                        style={{ width: "20%" }}
                        onBlur={validateHeightValue2}
                        onFocus={onFocusForObs}
                      ></input>{" "}
                      units{" "}
                    </label>
                    {/* <div className={`message2 ${isValid2 ? 'success' : 'error'}` } style={{color:"tomato" , fontSize:"1.0vw"}}>
                    {message2}
                    </div> */}
                    <br></br>
                  </div>
                </div>
                <div className="col-7 ">
                 
                </div>
              </div>
            )}

              
                         </div>
       </div>

        <div className="d-flex " style={{ height: "40%" }}>
             
           
             <div className="col-8 " style={{ height: "100%" }}>

             {/* <label>{` ${message}`}</label> */}
             {!isDisabled && isDisabledCanvas && msg && ( 
              <div  className="text-center mt-5 ">
              <span  className=" mt-5" style={{fontFamily:"Arial"  ,fontSize:"1.2vw",fontWeight:"bold",marginLeft:"26vw" }}>{`${message}`}&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              </span>  
             {!isDisabled && isDisabledCanvas && msg && drawABC && (
              <span style={{fontFamily:"Arial"  ,fontSize:"1.0vw",width:"9vw",marginLeft:"35vw"}}><Button className='d-flex align-items-center' variant="contained" style={{fontFamily:"Arial"  ,fontSize:"1.0vw",width:"9vw",marginLeft:"35vw" }} onClick={drawTiangleABC}>Draw ∆ABC</Button>
              </span>
              )} 

              {!isDisabled && isDisabledCanvas && msg && drawPBC && (  
              <span style={{fontFamily:"Arial"  ,fontSize:"1.0vw",width:"9vw",marginLeft:"35vw" }}><Button className='d-flex align-items-center' variant="contained" style={{fontFamily:"Arial"  ,fontSize:"1.0vw",width:"9vw",marginLeft:"35vw" }} onClick={drawTianglePBC}>Draw ∆PBC</Button>
              </span>
              )} 
              </div>
              )}
     
             {!isDisabled && !isDisabledCanvas && ( <div><Observation/></div> )}

             {isDisabledForCon &&(
              <BaseLine
                           base={Math.abs(Number(((storedPointsC[0] - storedPointsB[0]))/31.86).toFixed(1))}
                           height1={distHeightH1}
                           height2={distHeightH2}
                         ></BaseLine>
             )}

           


            
            </div>

           <div className="col-4 " style={{ height: "100%",fontFamily:"Arial",fontSize:"1.2vw" }}>
           {isDisabledForQ &&(
             <ul ><p className="" style={{ fontWeight:"bold" }}>What do you observe?</p>
             <li style={{ marginLeft:"5%" }}>Is PH = AH' ?</li>
             <li style={{ marginLeft:"5%" }}>{"Is PH < AH' ?"}</li>
             <li style={{ marginLeft:"5%" }}>{"Is PH > AH' ?"}</li>
             <li style={{ marginLeft:"5%" }}>Length of bases of triangles ABC and PBC?</li>
             
             </ul>)}
           </div>
        </div>
        
      </div>

      <BackNextBar setBackward={onBack}  setForward={onNext} />
    </div>
   
  );
}

export default Line;

