import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import pfCodeSamples from "./pfCodeSamples";
import { CopyBlock, ocean } from "react-code-blocks";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    scrollbarWidth: "none",
    gap: "1rem",
    color: "#fff",
  },
  container: {
    backgroundColor: "#101123",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.25rem",
    width: "100%",
    padding: "1rem",
    gap: "0.5rem"
  },
  header: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: 500,
  },
  description: {
    color: "hsl(220, 22%, 85%)",
    fontSize: "12px",
    fontWeight: 500,
  }
}));

const Upgrader = ({  }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>How Upgrader Is Generated</div>
        <div className={classes.description}>Your roll is a combination of your client seed and the server's seed. The server seed is a random string of characters generated by our server. The client seed is a random string of characters generated by you. The combination determines the outcome of your rolls. The server seed is revealed to you after the client seed is revealed, and you can verify that the outcome was indeed determined by the original seed and inputs.</div>
      </div>
      <div className={classes.container}>
        <div className={classes.header}>Outcome Verifier</div> 
        <CopyBlock
          text={pfCodeSamples.upgrader}
          language={"javascript"}
          showLineNumbers={true}
          theme={ocean}
          wrapLines
        />
      </div>
    </div>
  );
};

export default Upgrader;