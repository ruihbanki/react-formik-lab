import React from "react";
import PropTypes from "prop-types";
import { FormikContext, Form } from "formik";

const UseFormikForm = React.memo(props => {
  const { formik, children } = props;
  return (
    <FormikContext.Provider value={formik}>
      <Form noValidate>{children}</Form>
    </FormikContext.Provider>
  );
});

UseFormikForm.propTypes = {
  formik: PropTypes.object
};

UseFormikForm.defaultProps = {};

export default UseFormikForm;
