import React from "react";
import PropTypes from "prop-types";
import BlackChip from './blackChip';
import RedChip from './redChip/RedChip';

const GameSquare = props => {

  const { column, row, hasBlackChip, hasRedChip } = props;

  return (
    <div className="dark square" >
      {
        hasBlackChip && (<BlackChip />)
      }
      {
        hasRedChip && (<RedChip />)
      }
    </div>
  );
}

GameSquare.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  hasBlackChip: PropTypes.bool,
  hasRedChip: PropTypes.bool,
};

GameSquare.defaultProps = {
  hasBlackChip: false,
  hasRedChip: false,
};

export default GameSquare;
