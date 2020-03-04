import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText";
import FieldCep from "../components/FieldCep";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: "",
  cep: ""
};

const validate = data => {
  const errors = {};
  if (data.name && data.nickname && data.nickname[0] !== data.name[0]) {
    errors.nickname = "Must start with the same letter than name";
  }
  return errors;
};

export const CustomValidation = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action("submit")}
      validate={validate}
    >
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FieldText name="name" label="Name" required />
          </Grid>
          <Grid item xs={2}>
            <FieldText name="nickname" label="Nickname" required />
          </Grid>
          <Grid item xs={2}>
            <FieldCep name="cep" label="CEP" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
