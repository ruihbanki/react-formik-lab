import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, Formik } from "formik";
import { Grid, Button } from "@material-ui/core";
import FieldText from "../components/FieldText";

export default {
  title: "Examples"
};

const data = Array(200)
  .fill(null)
  .map((_, index) => ({ id: `id-${index}`, name: `Name ${index}` }));

const initialValues = data.reduce((result, cur) => {
  result[cur.id] = "";
  return result;
}, {});

export const ManyFields = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={action("submit")}>
      <Form noValidate>
        <Grid container spacing={2}>
          {data.map(item => (
            <Grid key={item.id} item xs={2}>
              <FieldText name={item.id} label={item.name} />
            </Grid>
          ))}
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
