import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button, Checkbox, FormControlLabel } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormik from "../components/UseFormik/UseFormik";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

export const DynamicRequired = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      action(values);
    }
  });

  const [required, setRequired] = useState(false);

  return (
    <UseFormik formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="name"
                  label="Name"
                  checked={required}
                  onChange={() => setRequired(r => !r)}
                />
              }
              label="Required"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField name="name" label="Name" required={required} />
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
