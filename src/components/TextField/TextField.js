import React from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { FastField } from "formik";

const TextField = props => {
  const { name, ...others } = props;

  return (
    <FastField name={name}>
      {({ field, meta }) => {
        console.log(field);
        const { value = "", onChange, onBlur } = field;
        const { touched, error } = meta;
        const helperText = touched ? error : "";
        return (
          <MuiTextField
            autoComplete="off"
            fullWidth
            name={name}
            value={value}
            helperText={helperText}
            error={Boolean(error)}
            onChange={onChange}
            onBlur={onBlur}
            {...others}
          />
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
