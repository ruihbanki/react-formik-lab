import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText/FieldText";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
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
