import React, { useState } from "react";
import CheckerSquare from "./checkerSquare/CheckerSquare";

const boardSize = 8;

const getColumns = rowCount => {
  const columns = [];

  for (
    let columnCount = 0;
    columnCount < boardSize;
    columnCount++
  ) {
    columns.push(<CheckerSquare column={columnCount} row={rowCount} />);
  }

  return columns;
};

const getRows = () => {
  const rows = [];

  for (let rowCount = 0; rowCount < boardSize; rowCount++) {
    rows.push(getColumns(rowCount));
  }

  return rows;
};

const CheckerSquares = () => {
  return (
      <div className="checker-board">{getRows()}</div>
  );
};

export default CheckerSquares;
