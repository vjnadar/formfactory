import React from "react";

import "./ValidatorTextbox.scss";
const ValidatorTextbox = (props) => {
  const { formProps, field } = props;
  return (
    <>
      <input
        type="text"
        name={field.name}
        id="square-textbox"
        onChange={formProps.handleChange}
        onBlur={formProps.handleBlur}
        value={formProps.values[field.name]}
      />
    </>
  );
};
export default ValidatorTextbox;
