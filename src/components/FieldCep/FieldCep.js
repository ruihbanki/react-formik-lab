import React from "react";
import FieldText from "../FieldText";

const FieldCep = React.memo(props => {
  return (
    <FieldText pattern="\d{5}-?\d{3}" patternMessage="INVALID_CEP" {...props} />
  );
});

export default FieldCep;
