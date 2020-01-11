import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { Field } from "formik";

const TextFieldMemo = React.memo(
  props => {
    const {
      field,
      meta,
      form,
      value: valueProp,
      onChange,
      onBlur,
      ...others
    } = props;
    const value = valueProp || field.value || "";
    const { touched, error } = meta;
    const helperText = touched || form.validateOnMount ? error : "";
    const showError = error && (touched || form.validateOnMount);

    const handleChange = useCallback(
      event => {
        field.onChange(event);
        if (onChange) {
          onChange(event);
        }
      },
      [field, onChange]
    );

    const handleBlur = useCallback(
      event => {
        field.onBlur(event);
        if (onBlur) {
          onBlur(event);
        }
      },
      [field, onBlur]
    );

    return (
      <MuiTextField
        autoComplete="off"
        fullWidth
        value={value}
        helperText={helperText}
        error={showError}
        onChange={handleChange}
        onBlur={handleBlur}
        {...others}
      />
    );
  },
  (prevProps, nextProps) => {
    const {
      field: prevField,
      meta: prevMet,
      form: prevForm,
      ...prevOthers
    } = prevProps;
    const {
      field: nextField,
      meta: nextMet,
      form: nextForm,
      ...nextOthers
    } = nextProps;
    if (Object.keys(prevOthers).length !== Object.keys(nextOthers).length) {
      return false;
    }
    return true;
  }
);

const TextField = props => {
  const { name, required, ...others } = props;

  const handleValidate = useCallback(
    value => {
      if (required && !value) {
        return "required";
      }
    },
    [required]
  );

  return (
    <Field name={name} validate={handleValidate}>
      {({ field, form, meta }) => {
        return (
          <TextFieldMemo
            {...others}
            name={name}
            required={required}
            field={field}
            form={form}
            meta={meta}
          />
        );
      }}
    </Field>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired
};

TextField.defaultProps = {};

export default TextField;
