import React from "react";
import PropTypes from "prop-types";
import GameSquare from './gameSquare/GameSquare';
import InertSquare from './inertSquare/InertSquare';


const hasBlackChip = row => row >= 5;

const hasRedChip= row => row <= 2;

const isLightSquare = ({ column, row }) => (column + row) % 2 === 0;

const CheckerPiece = props => {
  const { column, row } = props;

  if (isLightSquare(props)) {
    return <InertSquare />;
  } else {
    return (
      <GameSquare
        column={column}
        row={row}
        hasBlackChip={hasBlackChip(row)}
        hasRedChip={hasRedChip(row)}
      />
    );
  }
};

CheckerPiece.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};

export default CheckerPiece;