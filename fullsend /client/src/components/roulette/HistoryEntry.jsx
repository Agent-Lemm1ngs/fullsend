import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// MUI Components
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

// Assets
import red from "../../assets/wheel-slice-red.svg";
import black from "../../assets/wheel-slice-black.svg";

// Components
import ProvablyModal from "../modals/roulette/ProvablyModal";

// Custom Styled Component
const His = withStyles({
  root: {
    cursor: "pointer",
    marginRight: 10,
    background: props => props.bg,
    color: "#e4e4e4",
    fontFamily: "Poppins",
    fontSize: "12px",
    width: "2rem",
    fontWeight: 500,
    letterSpacing: ".05em",
    height: props => props.height,
    boxShadow: props => props.glow,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    "&:hover": {
      transition: "all 300ms",
      transform: "scale(1.1)",
      WebkitTransform: "scale(1.1)",
      filter: "brightness(1.15)",
    },
  },
})(Box);

const HistoryEntry = ({ game }) => {
  // Declare State
  const [modalVisible, setModalVisible] = useState(false);

  // Button onClick event handler
  const onClick = () => {
    setModalVisible(state => !state);
  };

  return (
    <Fragment>
      <ProvablyModal
        game={game}
        open={modalVisible}
        handleClose={() => setModalVisible(state => !state)}
      />
      <div onClick={onClick}>
        <Tooltip title="Click to view Provably Fair" placement="bottom">
          {game.winner === "red" ? (
            <His height="2rem" bg="#de4c41"><img src={red} alt="Red" style={{ height: "60%", width: "60%", }} /></His>
          ) : game.winner === "black" ? (
            <His height="2rem" bg="#31353d"><img src={black} alt="Black" style={{ height: "60%", width: "60%", }} /></His>
          ) : game.winner === "green" ? (
            <His height="2rem" bg="rgb(58, 137, 235)">

            </His>
          ) : (
            <span>INVALID</span>
          )}
        </Tooltip>
      </div>
    </Fragment>
  );
};

HistoryEntry.propTypes = {
  game: PropTypes.object.isRequired,
};

export default HistoryEntry;