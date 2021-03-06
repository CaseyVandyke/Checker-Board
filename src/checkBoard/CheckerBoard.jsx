import React, { useState, useContext, Fragment } from "react";
import Player from "./player";
import CheckerSquares from "./checkerSquares";

const CheckerBoard = () => {
  return (
    <Fragment>
      <h1 className="checker-title">Checkers</h1>
      <Player />
      <CheckerSquares />
    </Fragment>
  );
};

export default CheckerBoard;
