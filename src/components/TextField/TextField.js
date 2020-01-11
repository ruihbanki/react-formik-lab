import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldMemo = React.memo(props => {
  return <MuiTextField {...props} />;
});

const TextField = props => {
  const {
    name,
    required,
    value: valueProp,
    onChange,
    onBlur,
    ...others
  } = props;

  const validate = useCallback(
    value => {
      if (required && !value) {
        return "REQUIRED_FIELD";
      }
    },
    [required]
  );

  const [field, meta, helpers] = useField({ name, validate });

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

  const value = valueProp || field.value || "";
  const helperText = meta.touched || helpers.validateOnMount ? meta.error : "";
  const error = meta.error && (meta.touched || helpers.validateOnMount);

  return (
    <TextFieldMemo
      autoComplete="off"
      fullWidth
      error={error}
      helperText={helperText}
      name={name}
      required={required}
      {...others}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {};

export default TextField;
