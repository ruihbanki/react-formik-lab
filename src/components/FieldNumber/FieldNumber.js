import React, { useCallback } from "react";
import PropTypes from "prop-types";
import FieldText from "../FieldText";

const FieldNumber = React.memo(props => {
  const parse = useCallback(text => {
    if (!text) {
      return null;
    }
    const number = parseInt(text, 10);
    return isNaN(number) ? null : number;
  }, []);

  const format = useCallback(number => {
    if (number === null || number === undefined) {
      return "";
    }
    return number;
  }, []);

  return <FieldText parse={parse} format={format} {...props} />;
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
