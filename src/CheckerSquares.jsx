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

  // const checkerContainer = () => {
  //   for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < row; j++) {
  //       if ((i + j) % 2 === 0) {
  //         squares.push(<div className="light square" />);
  //       } else if (squares.length <= firstPlayerPiece) {
  //         squares.push(
  //           <div className="dark square">
  //             <div className="red chip" />
  //           </div>
  //         );
  //       } else if (squares.length >= secondPlayerPiece) {
  //         squares.push(
  //           <div className="dark square">
  //             <div className="black chip" />
  //           </div>
  //         );
  //       } else {
  //         squares.push(<div className="dark square" />);
  //       }
  //     }
  //   }
  // };

  // checkerContainer();

  // return (
  //   <div className="checker-board">
  //     {squares.map((square, i) => (
  //       <div key={i}>{square}</div>
  //     ))}
  //   </div>
  // );
};

export default CheckerSquares;
