import React from "react";
import PropTypes from "prop-types";
import { FormikContext } from "formik";

const UseFormik = React.memo(props => {
  const { formik, children } = props;
  return (
    <FormikContext.Provider value={formik}>{children}</FormikContext.Provider>
  );
});

UseFormik.propTypes = {
  formik: PropTypes.object.isRequired
};

export default UseFormik;
