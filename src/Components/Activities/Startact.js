import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import exp3 from "../expression";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import letusverify from "../../Img/letusverify.png";
import { ListItemText } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from "@material-ui/core";

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
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const onForward = () => {
    localStorage.clear();
    navigate("/activity11/letusverify/act1startpage");
  };

  // const onNext = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = (event) => {
    event.stopPropagation();
    setShowDialog(false);
  };

  const back = () => {
    navigate("/activity10");
  };

  return (
    <div className="" style={{ height: "100%", fontFamily: "arial" }}>
      <div
        className=" d-flex justify-content-center align-items-center text-center"
        style={{ height: "50%", fontSize: "1.5vw" }}
      >
        <div className="fs-1.2vw" style={{ fontSize: "1.2vw" }}>
          <span className="fw-bold" style={{ fontWeight: "bold" }}>
            Objective:
          </span>
          To verify that the triangles on the same base and between the same
          parallels are equal in area.
        </div>
      </div>
      <div className=" d-flex justify-content-center" style={{ height: "50%" }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" d-flex justify-content-center align-items-center col-2"
          style={{
            height: "50%",
            width: "20%",
            backdropFilter: "none",
          }}
          onClick={openDialog}
        >
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
              maxWidth: "100%",
              cursor: "pointer",
            }}
            src={letusverify}
            alt="Logo"
          />

          <Dialog
            // onClose={handleClose}
            // aria-labelledby="customized-dialog-title"
            open={showDialog}
          >
            <DialogTitle
              // id="customized-dialog-title"
              // onClose={handleClose}
              // className=""
              style={{ fontSize: "1.5vw" }}
            >
              What are we going to learn?
            </DialogTitle>
            <DialogContent dividers style={{marginLeft:"3%"}}>
              <ListItemText sx={{ display: "list-item" }}>
                We are going to find the triangles on the same base and between
                same parallel lines are equal in area.
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                We will draw two triangles on same base and same parallels.
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                We will measure the length of base.
              </ListItemText>

              <ListItemText sx={{ display: "list-item" }}>
                We will measure and compare heights of both the triangles.
              </ListItemText>

              <ListItemText sx={{ display: "list-item" }}>
                Then according to the formula, we can prove that obtained length
                of height and base, the area of both the triangles are same.
              </ListItemText>

              {/* <ListItemText sx={{ display: "list-item" }}>
                We are going to practically solve a linear equation, say 2x + 3
                = 5.
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                Initially, we will take two rectangles to represent "2x" area.
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                Then, we will be taking three squares and five squares to
                represent area "3" and "5" respectively.
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                We will try to fit the shapes i.e, rectangles and squares into
                an arrangement which will represent the equation (2x + 3 = 5).
              </ListItemText>
              <ListItemText sx={{ display: "list-item" }}>
                Also, we will find a solution to the equation.
              </ListItemText> */}
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                variant="contained"
                color="primary"
                onClick={onForward}
              >
                ok
              </Button>
              <Button
                autoFocus
                variant="contained"
                color="secondary"
                onClick={closeDialog}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default Startact;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";

// import PropTypes from "prop-types";

// import { styled } from "@mui/material/styles";

// import IconButton from "@mui/material/IconButton";

// import Typography from "@mui/material/Typography";

// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// import letusverify from "../../Img/letusverify.png"

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@material-ui/core";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >

//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };
// const Startact = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const onForward = () => {
//     {localStorage.clear()}
//     navigate("/activity11/letusverify/act1startpage");
//   };

//   const onNext = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const LightTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} classes={{ popper: className }} />
//   ))(({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: {
//       backgroundColor: theme.palette.common.white,
//       color: "rgba(0, 0, 0, 0.87)",
//       boxShadow: theme.shadows[1],
//       fontSize: 14,
//     },
//   }));

//   return (
//     <div className="d-flex flex-column  align-items-center " style={{fontFamily :"Arial" }}>
//       <div
//         className="col-9  flex-column justify-content-end d-flex text-wrap align-items-center text-center"
//         style={{ height: "150px" }}
//       >
//         <div className="fs-1.2vw" style={{ fontSize: "1.2vw" }}>
//         <span className="fw-bold" style={{ fontWeight: "bold" }}>Objective:</span> To verify that the triangles on the same base and between the same parallels are equal in area.

//         </div>
//         <div className="fw mt-3" style={{ fontSize: "1.2vw" }}>

//         </div>
//       </div>

//       <div
//         className="col-12 d-flex flex-column  align-items-center "
//         style={{ height: "315px" }}
//       >
//         {/* <Link to=""> */}

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="col-2 mt-3 "
//           style={{
//             height: "170px",
//             borderRadius: "100px",
//             backdropFilter: "none",
//           }}
//           onClick={onNext}
//         >

//                       <motion.img
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         style={{
//                           backgroundRepeat: "no-repeat",
//                           backgroundSize: "cover",
//                           maxHeight: "100%",
//                           maxWidth: "100%",
//                           cursor:"pointer"
//                         }}
//                         src={letusverify}
//                         alt="Logo"
//                       ></motion.img>

//           <Dialog
//             onClose={handleClose}
//             aria-labelledby="customized-dialog-title"
//             open={open}
//           >
//             <DialogTitle
//               id="customized-dialog-title"
//               onClose={handleClose}
//               style={{fontFamily:"arial"  ,fontSize:"1.2vw",fontWeight:"bold" }}
//             >
//               What are we going to learn?
//             </DialogTitle>
//             <DialogContent dividers>
//               <Typography gutterBottom>
//               <ul style={{fontFamily:"arial"  ,fontSize:"1.0vw" }}><li >
//                 We are going to find the triangles on the same base and between same parallel lines are equal in area.
//               </li></ul>

//               </Typography>
//               <Typography gutterBottom>
//               <ul style={{fontFamily:"arial"  ,fontSize:"1.0vw" }}><li> We will draw two triangles on same base and same parallels.</li></ul>

//               </Typography>
//               <Typography gutterBottom>
//               <ul style={{fontFamily:"arial"  ,fontSize:"1.0vw" }}>
//               <li> We will measure the length of base.</li><br></br>
//               <li>We will measure and compare heights of both the triangles.</li></ul>

//               </Typography>
//               <Typography gutterBottom>
//               <ul style={{fontFamily:"arial"  ,fontSize:"1.0vw" }}><li>Then according to the formula, we can prove that obtained length of height and base, the area of both the triangles are same.</li></ul>

//               </Typography>

//             </DialogContent>
//             <DialogActions>
//               <Button autoFocus variant="contained" color="primary" onClick={onForward} style={{fontFamily:"arial"  ,fontSize:"1.0vw" }} size="small">
//                 ok
//               </Button>
//               <Button autoFocus variant="contained" color="secondary"  style={{fontFamily:"arial"  ,fontSize:"1.0vw" }} size="small">
//                 cancel
//               </Button>

//             </DialogActions>
//           </Dialog>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Startact;
