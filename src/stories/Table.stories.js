import React from "react";
import { action } from "@storybook/addon-actions";
import { Form, useFormik } from "formik";
import { Button } from "@material-ui/core";
import FieldText from "../components/FieldText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

export const TableDemo = () => {
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
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formik.values.items.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <FieldText name={`items.${index}.name`} />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </UseFormik>
  );
};

export const TableDemo2 = () => {
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
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formik.values.items.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <input
                      name={`items.${index}.name`}
                      value={formik.values.items[index].name}
                      onChange={event =>
                        formik.setFieldValue(
                          `items.${index}.name`,
                          event.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </UseFormik>
  );
};
