import React from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";

const NumberField = React.memo(props => {
  const {} = props;
  return <TextField {...props} />;
});

NumberField.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

NumberField.defaultProps = {
  min: 0,
  max: Infinity
};

export default NumberField;
