import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import UseFormikFormContext from "../UseFormikForm/UseFormikFormContext";

const TextField = React.memo(props => {
  const { name, ...others } = props;

  const formik = useContext(UseFormikFormContext);

  console.log(formik);

  const error = formik && formik.errors[name];
  const value = formik && formik.values[name];

  const handleChange = event => {
    formik.setValues({
      ...formik.values,
      [name]: event.target.value
    });
  };

  const handleBlur = () => {
    formik.setTouched(name);
  };

  return (
    <MuiTextField
      autoComplete="off"
      fullWidth
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={error}
      error={Boolean(error)}
      {...others}
    />
  );
});

TextField.propTypes = {
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {};

export default TextField;
