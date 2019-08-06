import React from "react";
import PropTypes from "prop-types";

const GameSquare = props => {

  const { column, row } = props;

  return (
    <div className="dark square" >
      {column} {row}
    </div>
  );
}

GameSquare.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};

GameSquare.defaultProps = {

}

export default GameSquare;
