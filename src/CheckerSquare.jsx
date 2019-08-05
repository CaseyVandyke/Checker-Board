import React from "react";

const CheckerSquare = props => {
  const squares = [];
  const row = 8;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      if ((i + j) % 2 === 0) {
        const firstPlayer = squares.slice(1, 24);

        squares.push(<div className="light square" />);
      } else {
        squares.push(<div className="dark square" />);
      }
    }
  }

  return (
    <div className="checker-board">
      {squares.map((square, i) => (
        <div key={i}>{square}</div>
      ))}
    </div>
  );
};

export default CheckerSquare;
