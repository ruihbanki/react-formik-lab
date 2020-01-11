import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";

const FormFinalResultDemo = React.memo(() => {
  const formik = useFormik({
    initialValues: {
      name: "",
      nickname: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
    validate,
    validateOnMount: true
  });

  // console.log(formik);

  return (
    <div>
      <h2>Final result</h2>
      <UseFormikForm formik={formik}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField name="name" label="Name" required />
          </Grid>
          <Grid item xs={2}>
            <TextField name="nickname" label="Nickname" />
          </Grid>
          <Grid item xs={2}>
            <TextField name="age" label="Age" />
          </Grid>
          <Grid item xs={2}>
            <TextField name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="default"
              onClick={formik.resetForm}
            >
              Reset
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Send {formik.isSubmitting ? "..." : ""}
            </Button>
          </Grid>
        </Grid>
      </UseFormikForm>
    </div>
  );
});

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
}

export default FormFinalResultDemo;
