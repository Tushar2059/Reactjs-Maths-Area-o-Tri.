import React, { useState } from "react";
import "./Menusidebar.css";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import theory from "../../Img/theory.png";
import mcq from "../../Img/mcq.png";
import help from "../../Img/help.png";
import game from "../../Img/game.png";
import { Typography } from "@mui/material";

const Offcanvas = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");
  };

  return (
    <>
      <Dialog open={showDialog}>
        <DialogTitle>Instructions for quiz</DialogTitle>
        <DialogContent dividers>
          <Typography>
          Ensure you read this guide from start to finish.
            <ul className="broswer-default" id="main-list">
              <li>
                The Quiz has a duration of 10 minutes and ends as soon as your
                time is elapses.
              </li>
              <li>
                After clicking on Button "Agree" quiz will start
                alongwith time.
              </li>
              {/* <li>
                <div>Every question has 4 options.</div>
                <img src={question} alt="Quiz Question"></img>
              </li> */}
              <li>
                Select the option which best answers the question by cliking (or
                selecting) it.
              </li>
              <li>
                If the question is fill in the blanks type then it is necessary
                to drag and drop the correct option in the blank space.
              </li>
              <li>
                {" "}
                You will have 2 chances to select correct option if the question has 4 options and  you will have 1 chance to select correct option if the question has 2 options.
                <li>
                  If you dont know the answer you may skip the question and
                  review it again if time remains.
                </li>
                <li>If the question is attemted you cannot attemt it again.</li>
                <li>The score and timing is displayed on top of the screen.</li>
              </li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onAgree}>
            Agree
          </Button>
          <Button variant="contained" color="secondary" onClick={closeDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="offStyle"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <div className="" style={{ height: "100%" }}>
              
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                >
                  <LightTooltip title="Theory" placement="left">
                    <Link to="/letusverify/sqtheory">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={theory}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                >
                  <LightTooltip title="Viva voce" placement="left">
                    <div onClick={openDialog}>
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                          cursor:"pointer"
                        }}
                        src={mcq}
                        alt="Logo"
                      ></motion.img>
                    </div>
                  </LightTooltip>
                </div>

                {/* <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Lets Play!" placement="left">
                    <Link to="/letusverify/game">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={game}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div> */}

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "34%" }}
                >
                  <LightTooltip title="Help" placement="left">
                    <Link to="/letusverify/help">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={help}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Offcanvas;
