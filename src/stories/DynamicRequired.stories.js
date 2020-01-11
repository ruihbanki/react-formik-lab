import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button, Checkbox } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";

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
    <UseFormikForm formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Checkbox
              name="name"
              label="Name"
              checked={required}
              onChange={() => setRequired(r => !r)}
            />
            {required ? "dd" : "d"}
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
    </UseFormikForm>
  );
};
