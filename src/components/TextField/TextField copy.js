import React, { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import UseFormikFormContext from "../UseFormikForm/UseFormikFormContext";

const TextFieldMemo = React.memo(props => <MuiTextField {...props} />);

const TextField = props => {
  const { name, ...others } = props;

  const formik = useContext(UseFormikFormContext);

  console.log(formik);

  const errorMessage = formik.errors[name];
  const value = formik.values[name] || "";
  const touched = formik.touched[name];
  const helperText = formik.validateOnMount || touched ? errorMessage : null;
  const error = Boolean((formik.validateOnMount || touched) && errorMessage);

  const handleChange = useCallback(event => {
    formik.handleChange(event);
  }, []);

  const handleBlur = useCallback(() => {
    formik.setTouched(name);
  }, []);

  return (
    <TextFieldMemo
      autoComplete="off"
      fullWidth
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={helperText}
      error={error}
      {...others}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {};

export default TextField;
