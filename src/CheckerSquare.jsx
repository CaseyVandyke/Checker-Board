import React from "react";
import PropTypes from "prop-types";

const DarkSquare = () => <div className="dark square" />;

const LightSquare = () => <div className="light square" />;

const isLightSquare = ({ column, row }) => (column + row) % 2 === 0;

const CheckerPiece = props => {
  const { column, row } = props;

  if (isLightSquare(props)) {
    return <LightSquare />;
  } else {
    return <DarkSquare />;
  }
};

CheckerPiece.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};

export default CheckerPiece;