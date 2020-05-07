import React from "react";
import ValidatorTextbox from "../../UI/ValidatorTextbox/ValidatorTextbox";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
const fieldFactory = (props) => {
  // let fileInput;
  const fileInput = React.createRef();
  return (
    <>
      {props.inputFields.map((field) => (
        <React.Fragment key={`${field.name}`}>
          {field.type === "checkboxInline" ? (
            <>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id={field.name}
                  name={field.name}
                  value={field.checkValue}
                  onChange={props.formProps.handleChange}
                  onBlur={props.formProps.handleBlur}
                  checked={props.formProps.values[field.name]}
                />
                <label htmlFor={field.name}>
                  <span> {field.label}</span>
                </label>
              </div>
              {props.formProps.errors[field.name] &&
                props.formProps.touched[field.name] && (
                  <small className="formErrors">
                    {props.formProps.errors[field.name]}
                  </small>
                )}
            </>
          ) : field.type === "radioButtonSet" ? (
            <React.Fragment>
              <label>{field.legend}</label>
              <span className="radio-container">
                {field.options.map((option) => (
                  <React.Fragment key={option.label}>
                    <label htmlFor={option.label}>{option.label}</label>
                    <input
                      id={option.label}
                      type={option.type}
                      name={option.name}
                      onChange={props.formProps.handleChange}
                      onBlur={props.formProps.handleBlur}
                      value={option.radioValue}
                      checked={
                        props.formProps.values[option.name] ===
                        option.radioValue
                      }
                    />
                  </React.Fragment>
                ))}
              </span>
              <div>
                {props.formProps.errors[field.name] &&
                  props.formProps.touched[field.name] && (
                    <small className="formErrors">
                      {props.formProps.errors[field.name]}
                    </small>
                  )}
              </div>
            </React.Fragment>
          ) : field.type === "select" ? (
            <React.Fragment>
              <label htmlFor={field.name}>{field.label}</label>
              <select
                id={field.name}
                name={field.name}
                onChange={props.formProps.handleChange}
                onBlur={props.formProps.handleBlur}
                value={props.formProps.values[field.name]}
              >
                {field.options.map((opt) => (
                  <React.Fragment key={opt.displayValue}>
                    <option value={opt.value}>{opt.displayValue}</option>
                  </React.Fragment>
                ))}
              </select>
              {props.formProps.errors[field.name] &&
                props.formProps.touched[field.name] && (
                  <small className="formErrors">
                    {props.formProps.errors[field.name]}
                  </small>
                )}
            </React.Fragment>
          ) : field.type === "formtext" ? (
            <React.Fragment>
              <small>{field.text}</small>
            </React.Fragment>
          ) : field.type === "link" ? (
            <React.Fragment>
              <Link to={field.to} className="formLink">
                {field.label}
              </Link>
            </React.Fragment>
          ) : field.type === "customImageUpload" ? (
            <>
              <span className="file-box">
                <ul
                  className="container"
                  onClick={() => fileInput.current.click()}
                >
                  <li>
                    <Avatar
                      alt="Company_Logo"
                      src={`/static/images/companyLogo.PNG`}
                    />
                  </li>
                  &nbsp;{" "}
                  <li>
                    <span> Upload Your Company Logo</span>
                  </li>
                </ul>
                <input
                  id={field.name}
                  name={field.name}
                  hidden
                  type="file"
                  onChange={(event) => {
                    props.formProps.setFieldValue(
                      field.name,
                      event.currentTarget.files[0].name
                    );
                  }}
                  ref={fileInput}
                />
              </span>
              <div>
                {props.formProps.errors[field.name] &&
                  props.formProps.touched[field.name] && (
                    <small className="formErrors">
                      {props.formProps.errors[field.name]}
                    </small>
                  )}
              </div>
            </>
          ) : field.type === "validatorTextbox" ? (
            <>
              <legend>{field.legend}</legend>
              <div className="textbox-container">
                {field.values.map((field) => (
                  <React.Fragment key={field.name}>
                    {" "}
                    <ValidatorTextbox
                      formProps={props.formProps}
                      field={field}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div>
                {props.formProps.errors[field.name] &&
                  props.formProps.touched[field.name] && (
                    <small className="formErrors">
                      props.formProps.errors[field.name]
                    </small>
                  )}
              </div>
            </>
          ) : (
            <React.Fragment key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={props.formProps.handleChange}
                onBlur={props.formProps.handleBlur}
                value={props.formProps.values[field.name]}
              />
              {props.formProps.errors[field.name] &&
                props.formProps.touched[field.name] && (
                  <small className="formErrors">
                    {props.formProps.errors[field.name]}
                  </small>
                )}
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
export default fieldFactory;
