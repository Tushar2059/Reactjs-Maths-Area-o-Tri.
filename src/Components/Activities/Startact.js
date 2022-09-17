import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exp1 from "../Superscript";
import { motion } from "framer-motion";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
//import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import letusverify from "../../Img/letusverify.png"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon />  */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Startact = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onForward = () => {
    {localStorage.clear()}
    navigate("/activity11/letusverify/act1startpage");
  };

  const onNext = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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

  return (
    <div className="d-flex flex-column  align-items-center " style={{fontFamily :"Arial" }}>
      <div
        className="col-9  flex-column justify-content-end d-flex text-wrap align-items-center text-center"
        style={{ height: "150px" }}
      >
        <div className="fs-1.2vw" style={{ fontSize: "1.2vw" }}>
        <span className="fw-bold" style={{ fontWeight: "bold" }}>Objective:</span> To verify that the triangles on the same base and between the same parallels are equal in area.
          
        </div>
        <div className="fw mt-3" style={{ fontSize: "1.2vw" }}>
        {/* <span style={{ fontSize: "1.2vw" }}>Objective :</span>  */}
          
        </div>
      </div>

      <div
        className="col-12 d-flex flex-column  align-items-center "
        style={{ height: "315px" }}
      >
        {/* <Link to=""> */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-2 mt-3 "
          style={{
            height: "170px",
            borderRadius: "100px",
            backdropFilter: "none", 
          }}
          onClick={onNext}
        >

        {/* <LightTooltip title="Let's Verify!" placement="left" arrow> */}
                    
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={letusverify}
                        alt="Logo"
                      ></motion.img>
                    
        {/* </LightTooltip> */}
          {/* <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
              cursor: "pointer",
            }}
            src={"/img/letusverify.png"}
            alt="Logo"
          /> */}

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              style={{fontFamily:"Arial"  ,fontSize:"1.2vw",fontWeight:"bold" }}
            >
              What we are going to learn ?
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
              <ul style={{fontFamily:"Arial"  ,fontSize:"1.0vw" }}><li >
                We are going to find the triangles on the same base and between same parallel lines are equal in area.
              </li></ul>
              
              </Typography>
              <Typography gutterBottom>
              <ul style={{fontFamily:"Arial"  ,fontSize:"1.0vw" }}><li> We will draw two triangles on same base and same parallels.</li></ul>
             
              </Typography>
              <Typography gutterBottom>
              <ul style={{fontFamily:"Arial"  ,fontSize:"1.0vw" }}>
              <li> We will measure the length of base.</li><br></br>
              <li>We will measure and compare heights of both the triangles.</li></ul>
              
              </Typography>
              <Typography gutterBottom>
              <ul style={{fontFamily:"Arial"  ,fontSize:"1.0vw" }}><li>Then according to the formula, we can prove that obtained length of height and base, the area of both the triangles are same.</li></ul>
              
              </Typography>
              {/* <Typography gutterBottom>
               <h5><b>Are You Ready ?</b></h5>
              </Typography> */}
            </DialogContent>
            <DialogActions>
              <Button autoFocus variant="contained" onClick={onForward} style={{fontFamily:"Arial"  ,fontSize:"1.0vw" }}>
                I am ready!
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </motion.div>
        {/* </Link> */}
        {/* <div className="fw-bold fs-2">Click me!</div> */}
      </div>
    </div>
  );
};

export default Startact;