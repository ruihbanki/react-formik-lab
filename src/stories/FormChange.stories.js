import React from "react";
import { action } from "@storybook/addon-actions";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormik from "../components/UseFormik/UseFormik";

export default {
  title: "Examples"
};

const initialValues = {
  name: "",
  nickname: ""
};

const users = [
  { name: "John" },
  { name: "Marie" },
  { name: "Joe" },
  { name: "Zulu" }
];

export const FormChange = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      action(values);
    }
  });

  const usersFiltered = users.filter(user =>
    user.name.toUpperCase().includes(formik.values.name.toUpperCase())
  );

  return (
    <UseFormik formik={formik}>
      <Form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField name="name" label="Name" required />
          </Grid>
        </Grid>
      </Form>
      <ul>
        {usersFiltered.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </UseFormik>
  );
};
