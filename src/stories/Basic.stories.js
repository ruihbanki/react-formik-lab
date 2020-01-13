import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText";
import FieldNumber from "../components/FieldNumber";
import FieldCep from "../components/FieldCep";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: "",
  age: null,
  cep: ""
};

export const Basic = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={action("submit")}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FieldText name="name" label="Name" required />
          </Grid>
          <Grid item xs={2}>
            <FieldText name="nickname" label="Nickname" />
          </Grid>
          <Grid item xs={2}>
            <FieldNumber name="age" min={18} max={60} label="Age" />
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
