import React from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText";
import FieldCep from "../components/FieldCep";
import UseFormik from "../components/UseFormik";

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
    <UseFormik formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FieldCep name="cep" label="CEP" onBlur={handleCepBlur} />
          </Grid>
          <Grid item xs={2}>
            <FieldText name="address" label="Address" />
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
