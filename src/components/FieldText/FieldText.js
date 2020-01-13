import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldMemo = React.memo(props => <TextField {...props} />);

const FieldText = props => {
  const {
    name,
    required,
    requiredMessage,
    pattern,
    patternMessage,
    value: valueProp,
    onChange,
    onBlur,
    ...others
  } = props;

  const validate = useCallback(
    value => {
      if (required && !value) {
        return requiredMessage;
      }
      if (pattern && !new RegExp(pattern).test(value)) {
        return patternMessage;
      }
    },
    [required, requiredMessage, pattern, patternMessage]
  );

  const [field, meta] = useField({ name, validate });

  const handleChange = useCallback(
    event => {
      field.onChange(event);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  const handleBlur = useCallback(
    event => {
      field.onBlur(event);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur]
  );

  const value = valueProp || field.value;
  const helperText = meta.touched ? meta.error : "";
  const error = meta.touched && Boolean(meta.error);

  return (
    <TextFieldMemo
      autoComplete="off"
      fullWidth
      name={name}
      required={required}
      error={error}
      helperText={helperText}
      {...others}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

FieldText.propTypes = {
  name: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  pattern: PropTypes.string,
  patternMessage: PropTypes.string
};

FieldText.defaultProps = {
  requiredMessage: "REQUIRED_FIELD",
  pattern: null,
  patternMessage: "PATTERN_INVALID"
};

export default FieldText;