import React from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText/FieldText";
import UseFormik from "../components/UseFormik/UseFormik";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

const initialTouched = {
  name: true,
  nickname: true
};

function validate(values) {
  const errors = {};
  if (!values.name || values.name.length < 5) {
    errors.name = "NAME_TO_SHORT";
  }
  return errors;
}

export const ValidateOnMount = () => {
  const formik = useFormik({
    initialValues,
    initialTouched,
    onSubmit: values => {
      action(values);
    },
    validate,
    validateOnMount: true
  });

  return (
    <UseFormik formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FieldText name="name" label="Name" required />
          </Grid>
          <Grid item xs={2}>
            <FieldText name="nickname" label="Nickname" required />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </UseFormik>
  );
};
