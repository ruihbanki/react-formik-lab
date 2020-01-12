import React, { useState, useCallback } from "react";
import { useFormik, Form } from "formik";
import { Grid, Button, Checkbox } from "@material-ui/core";
import TextField from "../components/TextField";
import UseFormik from "../components/UseFormik";
import NumberField from "../components/NumberField";

const initialValues = {
  name: "",
  nickname: "",
  age: "",
  cep: "",
  address: "",
  email: ""
};

function validate(values) {
  const errors = {};
  // if (!values.name || values.name.length < 5) {
  //   errors.name = "NAME_TO_SHORT";
  // }
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
    validateOnMount: true
  });

  const handleCepBlur = useCallback(() => {
    formik.setValues({
      ...formik.values,
      address: `Address of CEP ${formik.values.cep}`
    });
  }, [formik]);

  const [required, setRequired] = useState(false);

  return (
    <div>
      <h2>Final result</h2>
      <UseFormik formik={formik}>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Checkbox
                name="name"
                label="Name"
                checked={required}
                onChange={() => {
                  setRequired(r => !r);
                  formik.validateForm();
                }}
              />
              {required ? "dd" : "d"}
            </Grid>
            <Grid item xs={2}>
              <TextField name="name" label="Name" required={required} />
            </Grid>
            <Grid item xs={2}>
              <TextField name="nickname" label="Nickname" />
            </Grid>
            <Grid item xs={2}>
              <NumberField name="age" label="Age" required />
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
      </UseFormik>
    </div>
  );
});

export default FormFinalResultDemo;
