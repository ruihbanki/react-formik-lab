import React from "react";
import PropTypes from "prop-types";
import UseFormikFormContext from "./UseFormikFormContext";

const UseFormikForm = React.memo(props => {
  const { formik, children } = props;
  return (
    <UseFormikFormContext.Provider value={formik}>
      <form
        onReset={formik.handleReset}
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {children}
      </form>
    </UseFormikFormContext.Provider>
  );
});

UseFormikForm.propTypes = {
  formik: PropTypes.object
};

UseFormikForm.defaultProps = {};

export default UseFormikForm;
