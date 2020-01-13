import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button, Checkbox, FormControlLabel } from "@material-ui/core";
import FieldText from "../components/FieldText/FieldText";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

export const DynamicRequired = () => {
  const [required, setRequired] = useState(false);

  return (
    <Formik initialValues={initialValues} onSubmit={action("submit")}>
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
            <FieldText name="name" label="Name" required={required} />
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
