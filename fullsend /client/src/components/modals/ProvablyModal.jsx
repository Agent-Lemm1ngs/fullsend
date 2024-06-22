import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

// MUI Components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  modal: {
    "& div > div": {
      color: "#e4e4e4",
      fontFamily: "Poppins",
      fontSize: "13px",
      fontWeight: 500,
      letterSpacing: ".1em",
    },
    "& .MuiDialog-paperWidthSm": {
      scrollbarWidth: "none",
      width: "50%",
      background: "#1D2126",
      // border: "2px solid #2f3947",
      borderRadius: "20px",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        margin: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "15px",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: "15px",
      },
    },
  },
  vipTitle: {
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign: "right",
    marginTop: "2rem",
    marginRight: "1rem",
    "& > span": {
      color: "#507afd",
      fontFamily: "Poppins",
    },
  },
  vipDesc: {
    width: "90%",
    color: "#373c5c",
    fontFamily: "Poppins",
    textAlign: "center",
    margin: "2rem auto",
    "& > a": {
      color: "#5f679a",
      textDecoration: "none",
    },
  },
  buttontest: {
    color: "#e4e4e4",
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: ".1em",
  },
  progressbox: {
    margin: "0 1rem",
    position: "relative",
    "& > div > .MuiOutlinedInput-root": {
      "& > input": {
      },
    },
    "& > div": {
      width: "100%",
      "& label": {
        color: "#fff",
      },
      "& label.Mui-focused": {
        color: "#4e7afd",
      },
      "& .MuiInput-underline:after": {
        border: "1px solid #2f3947",
        borderRadius: "6px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "1px solid #2f3947",
          borderRadius: "6px",
        },
        "&:hover fieldset": {
          border: "1px solid #2f3947",
          borderRadius: "6px",
        },
        "&.Mui-focused fieldset": {
          border: "1px solid #2f3947",
          borderRadius: "6px",
        },
      },
    },
    "& > button": {
      position: "absolute",
      right: 10,
      top: 10,
      width: "7rem",
      background: "#4e7afd",
      color: "white",
      "&:hover": {
        background: "#4e7afd",
      },
      "& .MuiButton-label": {
      },
    },
    "& > img": {
      position: "absolute",
      top: -10,
      zIndex: 1000,
    },
  },
}));

const Field = withStyles({
  root: {
    width: "100%",
    marginBottom: 20,
    "& label": {
      color: "#5f6368",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: ".1em",
    },
    "& label.Mui-focused": {
      color: "#5f6368",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: ".1em",
    },
    "& .MuiInput-underline:after": {
      border: "1px solid #2f3947",
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #2f3947",
        borderRadius: "6px",
      },
      "&:hover fieldset": {
        border: "1px solid #2f3947",
        borderRadius: "6px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #2f3947",
        borderRadius: "6px",
      },
    },
  },
})(TextField);

const Provably = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.modal}
      onClose={handleClose}
      open={open}
      style={{ fontFamily: "Poppins", }}
    >
      <DialogTitle onClose={handleClose} style={{ fontFamily: "Poppins", borderTop: "12px solid #2ee9361a", }}>
        <span style={{ fontFamily: "Poppins", }}><b><span style={{ fontWeight: "500", }}>⚖️</span> Provably Fair</b></span>
      </DialogTitle>
      <DialogContent >
        <Field
          className={classes.field}
          label="Round ID"
          value="..."
          variant="outlined"
        />
        <Field
          className={classes.field}
          label="Private Hash"
          value="..."
          variant="outlined"
        />
        <Field
          className={classes.field}
          label="Private Seed"
          value="..."
          variant="outlined"
        />
        <Field
          className={classes.field}
          label="Public Seed"
          value="..."
          variant="outlined"
        />
        <Field
          className={classes.field}
          label="Round Ticket"
          value="..."
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.buttontest} color="primary">
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Provably;