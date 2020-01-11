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
  cep: "",
  address: ""
};

export const PopulateFields = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      action(values);
    }
  });

  const handleCepBlur = () => {
    formik.setValues({
      ...formik.values,
      address: `Address of CEP ${formik.values.cep}`
    });
  };

  return (
    <UseFormikForm formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField name="cep" label="CEP" onBlur={handleCepBlur} />
          </Grid>
          <Grid item xs={2}>
            <TextField name="address" label="Address" />
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
