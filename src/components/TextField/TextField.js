import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { FastField } from "formik";

const TextFieldMemo = React.memo(props => {
  const { field, meta, value: valueProp, onChange, onBlur, ...others } = props;
  const value = valueProp || field.value || "";
  const { touched, error } = meta;
  const helperText = touched ? error : "";

  const handleChange = useCallback(event => {
    field.onChange(event);
    if (onChange) {
      onChange(event);
    }
  }, []);

  const handleBlur = useCallback(event => {
    field.onBlur(event);
    if (onBlur) {
      onBlur(event);
    }
  }, []);

  return (
    <MuiTextField
      autoComplete="off"
      fullWidth
      value={value}
      helperText={helperText}
      error={touched && Boolean(error)}
      onChange={handleChange}
      onBlur={handleBlur}
      {...others}
    />
  );
});

const TextField = props => {
  const { name, ...others } = props;

  return (
    <FastField name={name}>
      {({ field, meta }) => {
        return (
          <TextFieldMemo {...others} name={name} field={field} meta={meta} />
        );
      }}
    </FastField>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {};

export default TextField;
