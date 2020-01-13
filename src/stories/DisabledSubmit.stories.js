import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText/FieldText";
import FieldCep from "../components/FieldCep";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  cep: ""
};

export const DisabledSubmit = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action("submit")}
      validateOnMount
    >
      {formik => (
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <FieldText name="name" label="Name" required />
            </Grid>
            <Grid item xs={2}>
              <FieldCep name="cep" label="CEP" />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!formik.isValid}
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
