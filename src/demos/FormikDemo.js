import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Grid, Button, Checkbox } from "@material-ui/core";
import TextField from "../components/TextField";

const initialValues = {
  name: "",
  nickname: "",
  lastName: ""
};

function validate(values) {
  const errors = {};
  if (!values.lastName || values.lastName.length < 5) {
    errors.lastName = "NAME_TO_SHORT";
  }
  return errors;
}

const FormikDemo = React.memo(() => {
  const [required, setRequired] = useState(true);

  const initialTouched = {
    name: true
  };

  return (
    <div>
      <h2>Basic</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        initialTouched={initialTouched}
        validateOnMount
      >
        {({ resetForm }) => (
          <Form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Checkbox
                  name="name"
                  label="Name"
                  checked={required}
                  onChange={() => setRequired(r => !r)}
                />
                {required ? "dd" : "d"}
              </Grid>
              <Grid item xs={2}>
                <TextField name="name" label="Name" required={required} />
              </Grid>
              <Grid item xs={2}>
                <TextField name="nickname" label="Nickname" required />
              </Grid>
              <Grid item xs={2}>
                <Field name="lastName">
                  {({ field, form: { touched, errors }, meta }) => (
                    <div>
                      <input type="text" placeholder="Email" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="default" onClick={resetForm}>
                  Reset
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default FormikDemo;
