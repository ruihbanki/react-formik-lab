import React from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
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
    onSubmit: values => {
      action(values);
    },
    validate,
    validateOnMount: true
  });

  return (
    <UseFormikForm formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField name="name" label="Name" required />
          </Grid>
          <Grid item xs={2}>
            <TextField name="nickname" label="Nickname" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </UseFormikForm>
  );
};
