import React from "react";
import { useFormik, Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextField from "../components/TextField/TextField";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";

const initialValues = {
  name: "",
  nickname: ""
};

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  console.log("validate errros", values, errors);

  return errors;
}

const FormFinalResultDemo = React.memo(() => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
    validate,
    validateOnMount: false
  });

  const handleCepBlur = () => {
    formik.setValues({
      ...formik.values,
      address: `Address of CEP ${formik.values.cep}`
    });
  };

  return (
    <div>
      <h2>Final result</h2>
      <UseFormikForm formik={formik}>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextField name="name" label="Name" required />
            </Grid>
            <Grid item xs={2}>
              <TextField name="nickname" label="Nickname" />
            </Grid>
            <Grid item xs={2}>
              <TextField name="age" label="Age" required />
            </Grid>
            <Grid item xs={2}>
              <TextField name="cep" label="CEP" onBlur={handleCepBlur} />
            </Grid>
            <Grid item xs={2}>
              <TextField name="address" label="Address" />
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
        </Form>
      </UseFormikForm>
    </div>
  );
});

export default FormFinalResultDemo;
