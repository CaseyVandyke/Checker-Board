import React, { useState } from "react";
import CheckerSquare from "./CheckerSquare";

const boardSize = 8;

const getColumns = rowCount => {
  const columns = [];

  for (
    let columnCount = 0;
    columnCount < boardSize;
    columnCount = columnCount + 1
  ) {
    columns.push(<CheckerSquare column={columnCount} row={rowCount} />);
  }

  return columns;
};

const getRows = () => {
  const rows = [];

  for (let rowCount = 0; rowCount < boardSize; rowCount = rowCount + 1) {
    rows.push(getColumns(rowCount));
  }

  return rows;
};

const CheckerSquares = props => {
  const [squares, setSquare] = useState([]);
  const row = 8;
  const firstPlayerPiece = 23;
  const secondPlayerPiece = 40;

  return <div className="checker-board">{getRows()}</div>;
};

export default CheckerSquares;
