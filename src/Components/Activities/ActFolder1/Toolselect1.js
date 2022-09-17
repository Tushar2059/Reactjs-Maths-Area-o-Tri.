import React from "react";
import { motion } from "framer-motion";
import ActivityShapes from "./ActivityShapes";
import ssquare3 from "../../../Img/Shapes/ssquare3.png"

const Toolselect1 = () => {
  return (
    <div className="d-flex align-items-center " style={{ height: "100%",fontFamily:"Arial" , fontSize:"1.2vw" }}>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        className="col-11 shadow-lg flex-wrap d-flex align-items-center justify-content-center"
        style={{
          height: "90%",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {/* <ActivityShapes
          sources="/img/Shapes/ssquare3.png"
          names="Set Square"
          redirectedto="/activity1/letusverify/act1startpage"
          arval="5"
          //disabled="false"
        /> */}
        <ActivityShapes
          sources={ssquare3}
          names="Set Square"
          redirectedto="/activity11/letusverify/act1startpage"
          arval="6"
          //disabled="true"
        />

        {/* <ActivityShapes
          sources="/img/Shapes/square.png"
          names="Square"
          redirectedto="/activity1/letusverify/act1startpage/inputvalues"
          arval="1"
          //disabled="false"
        />

        <ActivityShapes
          sources="/img/Shapes/rhombus.png"
          names="Rhombus"
          redirectedto="/activity1/letusverify/act1startpage"
          arval="4"
          //disabled="true"
        />

        <ActivityShapes
          sources="/img/Shapes/parallelogram.png"
          names="Parallelogram"
          redirectedto="/activity1/letusverify/act1startpage"
          arval="5"
          //disabled="true"
        />

        <ActivityShapes
          sources="/img/Shapes/elips.png"
          names="Ellipse"
          redirectedto="/activity1/letusverify/act1startpage"
          arval="6"
          //disabled="true"
        /> */}

        {/* <ActivityShapes
        sources="/img/Shapes/hex.png"
        names="Hexagon"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="7"
      />

      <ActivityShapes
        sources="/img/Shapes/kite.png"
        names="Kite"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="8"
      />

      <ActivityShapes
        sources="/img/Shapes/trpzm.png"
        names="Trapezium"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="9"
      />

      <ActivityShapes
        sources="/img/Shapes/pentagon.png"
        names="Pentagon"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="10"
      />

      <ActivityShapes
        sources="/img/Shapes/triangle.png"
        names="Triangle"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="11"
      />

      <ActivityShapes
        sources="/img/Shapes/octagone.png"
        names="Octagon"
        redirectedto="/activity1/letusverify/act1startpage"
        arval="12"
      /> */}
      </motion.div>
    </div>
  );
};

export default Toolselect1;