import Activity from "./Components/Activity";
import { Route, Routes } from "react-router-dom";
import Activity1 from "./Components/Activities/ActFolder1/Activity1";
import Activity2 from "./Components/Activities/ActFolder2/Activity2";
import Error from "./Components/Error";
import LetsVerify from "./Components/Activities/ActFolder1/LetsVerify";
import Act1startpage from "./Components/Activities/ActFolder1/Act1startpage";
import Theory from "./Components/Activities/ActFolder1/Theory";
import Mcq from "./Components/Activities/ActFolder1/Mcq";
import Game from "./Components/Activities/ActFolder1/Game";
import Help from "./Components/Activities/ActFolder1/Help";
import Inputvalues from "./Components/Activities/ActFolder1/Inputvalues";
import Twosquares from "./Components/Activities/ActFolder1/Twosquares";

import Line from "./Components/Activities/Line";
import TwoLine from "./Components/Activities/ActFolder1/TwoLine";
import { BaseLine } from "./Components/Activities/BaseLine";
import { SetSquare } from "./Components/Activities/ActFolder1/SetSquare";
import Last from "./Components/Activities/ActFolder1/Last";
import Theory2 from "./Components/Activities/ActFolder1/Theory2";
import Theory12 from "./Components/Activities/ActFolder1/Theory12";
import Theory13 from "./Components/Activities/ActFolder1/Theory13";
import Play from "./Components/quiz/Play";
import QuizInstructions from "./Components/quiz/QuizInstructions";
import  "./Components/Activities/Line.css";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Activity1 />} />

      <Route path="/activity11" element={<Activity1 />} />
      <Route path="/activity11/letusverify" element={<LetsVerify />} />
      <Route
        path="/activity11/letusverify/act1startpage"
        element={<Act1startpage />}
      >
       <Route path="last" element={<Last/>} />
        <Route path="baseline" element={<BaseLine></BaseLine>} />
        <Route path="twoline" element={<TwoLine/>} />
        <Route path="inputvalues" element={<Inputvalues />} />
        <Route path="twosqare" element={<Twosquares />} />
        <Route path="setsquare" element={<SetSquare />} />
        <Route path="line" element={<Line />} />
        <Route path="baseline" element={<BaseLine/>} />
        
        
      </Route>

    
      {/* <Route path="/activity11/letusverify/theory" element={<Theory/>} />
      <Route path="/activity11/letusverify/theory12" element={<Theory12/>} />
      <Route path="/activity11/letusverify/theory13" element={<Theory13/>} />
     
      <Route path="/activity11/letusverify/mcq" element={<Mcq />} />
      <Route path="/activity11/letusverify/game" element={<Game />} />
      <Route path="/activity11/letusverify/help" element={<Help />} /> */}

      <Route path="/letusverify/sqtheory" element={<Theory />} />
<Route path="/letusverify/instructions" element={<QuizInstructions />} />
<Route path="/letusverify/quiz" element={<Play />} />
<Route path="/letusverify/help" element={<Help />} />

      <Route path="/activity2" element={<Activity2 />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
