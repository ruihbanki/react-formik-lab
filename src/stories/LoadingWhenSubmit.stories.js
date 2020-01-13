import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import FieldText from "../components/FieldText/FieldText";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

export const LoadingWhenSubmit = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      action("submit")(values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <FieldText name="name" label="Name" required />
            </Grid>
            <Grid item xs={2}>
              <FieldText name="nickname" label="Nickname" />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={
                  isSubmitting ? (
                    <CircularProgress color="inherit" size={16} />
                  ) : null
                }
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
