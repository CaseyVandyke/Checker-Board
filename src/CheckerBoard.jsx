import React, { useState, useContext, Fragment } from "react";
import Player from "./Player";
import CheckerSquare from "./CheckerSquare";

const CheckerBoard = () => {
  return (
    <Fragment>
      <h1 className="checker-title">Checkers</h1>
      <Player />
      <CheckerSquare />
    </Fragment>
  );
};

export default CheckerBoard;
