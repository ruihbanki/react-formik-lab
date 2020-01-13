import React, { useState } from "react";
import { useFormik, Form } from "formik";
import { Grid, Button, Checkbox } from "@material-ui/core";
import FieldText from "../components/FieldText";
import UseFormik from "../components/UseFormik";
import FieldNumber from "../components/FieldNumber/FieldNumber";
import FieldCep from "../components/FieldCep/FieldCep";

const initialValues = {
  name: "",
  nickname: "",
  age: null,
  cep: ""
};

const BasicDemo = React.memo(() => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    }
  });

  const [required, setRequired] = useState(false);

  return (
    <div>
      <h2>Basic</h2>
      <UseFormik formik={formik}>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Checkbox
                name="name"
                label="Name"
                checked={required}
                onChange={() => setRequired(r => !r)}
              />
              Required
            </Grid>
            <Grid item xs={2}>
              <FieldText name="name" label="Name" required={required} />
            </Grid>
            <Grid item xs={2}>
              <FieldText name="nickname" label="Nickname" />
            </Grid>
            <Grid item xs={2}>
              <FieldNumber name="age" label="Age" />
            </Grid>
            <Grid item xs={2}>
              <FieldCep name="cep" label="CEP" />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="default"
                onClick={() => formik.resetForm()}
              >
                Reset
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </UseFormik>
    </div>
  );
});

export default BasicDemo;
