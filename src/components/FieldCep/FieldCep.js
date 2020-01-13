import React, { useCallback } from "react";
import PropTypes from "prop-types";
import FieldText from "../FieldText";

const FieldCep = React.memo(props => {
  const { invalidMessage, ...others } = props;

  const validate = useCallback(
    value => {
      if (value && !new RegExp("\\d{5}-?\\d{3}").test(value)) {
        return invalidMessage;
      }
    },
    [invalidMessage]
  );

  return <FieldText validate={validate} {...others} />;
});

FieldCep.propTypes = {
  invalidMessage: PropTypes.string
};

FieldCep.defaultProps = {
  invalidMessage: "CEP_INVALID"
};

export default FieldCep;
