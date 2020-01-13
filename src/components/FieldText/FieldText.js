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
    validate: validateProp,
    value: valueProp,
    parse,
    format,
    onChange,
    onBlur,
    ...others
  } = props;

  const validateInternal = useCallback(
    value => {
      if (required && !value) {
        return requiredMessage;
      }
    },
    [required, requiredMessage]
  );

  const [field, meta, helpers] = useField({
    name,
    validate: validateProp || validateInternal
  });

  const handleChange = useCallback(
    event => {
      const value = parse(event.target.value);
      helpers.setValue(value);
      if (onChange) {
        onChange(event);
      }
    },
    [parse, onChange, name]
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

  const value = format(valueProp || field.value);
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
  validate: PropTypes.func,
  format: PropTypes.func,
  parse: PropTypes.func
};

FieldText.defaultProps = {
  requiredMessage: "REQUIRED_FIELD",
  validate: undefined,
  format: v => v,
  parse: v => v
};

export default FieldText;
