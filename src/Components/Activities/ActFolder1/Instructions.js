import React from "react";

const Instructions = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>	Two parallel lines are given. Line L and Line M.</li> */}
      <p className="text-center">	Click on any two points on line L to get a base BC.</p>
      
    </ul>
  );
};

const Instructions_1 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>Base BC is drawn on Line L.</li> */}
      <p>Now, click anywhere on line M to get point A as vertex of a ∆ABC. </p>

    </ul>
  );
};

const Instructions_2 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>Base BC is drawn on Line L.</li> */}
      <p>Click on "Draw ∆ABC" button to draw ∆ABC. </p>

    </ul>
  );
};

const Instructions_3 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>Base BC is drawn on Line L.</li> */}
      <p>Now, click anywhere on line M (keep some distance from point A) to get point P as a vertex of another triangle.</p>

    </ul>
  );
};

const Instructions_4 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>The triangle ABC is formed </li> */}
      
      <p>Click on "Draw ∆PBC" button to draw ∆PBC. </p>
    </ul>
  );
};

const Instructions_5 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <li>The triangle PBC is formed. </li> 
      <li><b>Step 1:</b> To get height of triangle, click on point P.</li>
      <li><b>Step 2:</b> Click on point P to draw perpendicular from point P to line L.</li>
    </ul>*/}
    <p>Now, click on point P to draw perpendicular from point P to line L.</p>
    </ul>
  );
};

const Instructions_6 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      <p>Now, click on point A to draw perpendicular from point A to line L.</p>
      
    </ul>
  );
};


const Instructions_7 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      {/* <p>Click on <b>"TOOLS" </b> button and select a Set Square to measure  base (BC).</p> */}
      <p>Select "Set Square" from "TOOLS" box to measure heights.</p>
      
      
    </ul>
  );
};

const Instructions_8 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      <li>Measure and note down base BC, heights PH and AH'.</li>
      <li>To measure heights of both the triangles, drag and drop set square accordingly. </li>
    </ul>
  );
  }

  const Instructions_9 = () => {
    return (
      <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
        {/* <li>What do you observed ?</li>
        <li>Is the height of ∆ABC and ∆PBC are same ?</li>
        <li>What are the area of both triangles ?</li> */}
        Click on <b>"Next" </b>button.
      </ul>
    );
}

const Instructions_10 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      <p> Click on <b>"Next" </b>button.</p>
      
    </ul>
  );

  
};

const Instructions_11 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
     {/* <li>Measure and note down base BC, heights PH and AH'.</li>
      <li>To measure heights of both the triangles, drag and drop set square accordingly. </li> */}
      
    </ul>
  );

  
};

const Instructions_12 = () => {
  return (
    <ul className="fs-1.2vw fw-normal" style={{fontFamily:"Arial"}}>
      <span style={{fontWeight:"bold"}}>Conclusion:</span>
      
      <li >Area of ∆ABC = Area of ∆PBC</li>
      <li >We have verified that the ∆ABC and ∆PBC which are on the same base and between same parallels are equal in area.</li>
      {/* <li>We have successfully completed the activity.</li> */}
    </ul> 
  );

  
};



export default Instructions;
export { Instructions_1, Instructions_2,Instructions_3,Instructions_4 ,Instructions_5,Instructions_6,Instructions_7,Instructions_8,Instructions_9,Instructions_10,Instructions_11,Instructions_12};
