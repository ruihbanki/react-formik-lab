import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldMemo = React.memo(props => <MuiTextField {...props} />);

const TextField = props => {
  const {
    name,
    required,
    requiredMessage,
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
    },
    [required]
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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string
};

TextField.defaultProps = {
  requiredMessage: "REQUIRED_FIELD"
};

export default TextField;
