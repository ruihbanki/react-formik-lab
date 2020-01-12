import React from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormik from "../components/UseFormik/UseFormik";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

export const Basic = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      action(values);
    }
  });

  return (
    <UseFormik formik={formik}>
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
    </UseFormik>
  );
};
