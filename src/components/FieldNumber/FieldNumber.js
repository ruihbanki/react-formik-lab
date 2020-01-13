import React, { useCallback } from "react";
import PropTypes from "prop-types";
import FieldText from "../FieldText";

const FieldNumber = React.memo(props => {
  const { min, max, minMessage, maxMessage, ...others } = props;

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

  const validate = useCallback(
    value => {
      if (!value) {
        return;
      }
      const number = parse(value);
      if (number < min) {
        return minMessage;
      }
      if (number > max) {
        return maxMessage;
      }
    },
    [parse, min, max, minMessage, maxMessage]
  );

  return (
    <FieldText parse={parse} format={format} validate={validate} {...others} />
  );
});

FieldNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  minMessage: PropTypes.string,
  maxMessage: PropTypes.string
};

FieldNumber.defaultProps = {
  min: 0,
  max: Infinity,
  minMessage: "VALUE_LESS_THAN_MIN",
  maxMessage: "VALUE_GREATER_THAN_MAX"
};

export default FieldNumber;
