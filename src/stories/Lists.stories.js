import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, useFormik } from "formik";
import { Button, List, ListItem } from "@material-ui/core";
import FieldText from "../components/FieldText";
import UseFormik from "../components/UseFormik";

export default {
  title: "Examples"
};

const items = Array(10)
  .fill(null)
  .map((_, index) => ({ id: `id-${index}`, name: `Name ${index}` }));

const initialValues = {
  items
};

export const Lists = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: action("submit")
  });

  const handleDelete = index => {
    const newItems = [...formik.values.items];
    newItems.splice(index, 1);
    formik.setValues({
      items: newItems
    });
  };

  return (
    <UseFormik formik={formik}>
      <Form noValidate>
        <List>
          {formik.values.items.map((row, index) => (
            <ListItem style={{ display: "flex", padding: 8 }}>
              <FieldText name={`items.${index}.name`} />
              <Button variant="contained" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </UseFormik>
  );
};
