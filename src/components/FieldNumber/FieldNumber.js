import React from "react";
import PropTypes from "prop-types";
import FieldText from "../FieldText";

const FieldNumber = React.memo(props => {
  return <FieldText {...props} />;
});

FieldNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

FieldNumber.defaultProps = {
  min: 0,
  max: Infinity
};

export default FieldNumber;
