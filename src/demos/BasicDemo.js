import React from "react";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";

const initialValues = {
  name: "",
  nickname: ""
};

const BasicDemo = React.memo(() => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    }
  });

  return (
    <div>
      <h2>Basic</h2>
      <UseFormikForm formik={formik}>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextField name="name" label="Name" required />
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
    </div>
  );
});

export default BasicDemo;
