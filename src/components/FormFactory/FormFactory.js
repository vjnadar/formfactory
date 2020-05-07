import { Formik } from "formik";
import React, { PureComponent } from "react";

import ButtonFactory from "./ButtonFactory/ButtonFactory";
import FieldFactory from "./FieldFactory/FieldFactory";
import * as Yup from "yup";
import "./FormFactory.scss";

class FormFactory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
      validationSchema: null,
    };
  }
  triggerInputFile = () => this.fileInput.click();
  componentDidMount() {
    const { formSpecs } = this.props;
    const fieldInitialValues = formSpecs.inputFields.reduce((obj, item) => {
      if (item.type === "validatorTextbox") {
        item.values.forEach((element) => {
          obj[element["name"]] = element.initialValue;
        });
      } else {
        obj[item["name"]] = item.initialValue;
      }
      return obj;
    }, {});
    const schema = formSpecs.inputFields.reduce((obj, item) => {
      if (item.type === "validatorTextbox") {
        item.values.forEach((element) => {
          obj[element["name"]] = this.setValidationSchema(element.validation);
        });
      } else {
        obj[item["name"]] = this.setValidationSchema(item.validation);
      }
      return obj;
    }, {});
    const validationSchema = Yup.object().shape(schema);
    this.setState({
      initialValues: fieldInitialValues,
      validationSchema,
    });
  }
  setValidationSchema = (validation) => {
    switch (validation && validation.type) {
      case "email": {
        return Yup.string()
          .email(validation.invalidEmailMessage)
          .required(validation.requiredMessage);
      }
      case "text": {
        return Yup.string().required(validation.requiredMessage);
      }
      case "boolean": {
        return Yup.bool().oneOf([true], validation.requiredMessage);
      }
      case "radioButtonSet": {
        return Yup.string().required(validation.requiredMessage);
      }
      case "number": {
        return Yup.number()
          .positive(validation.invalidNumberMessage)
          .required(validation.requiredMessage);
      }
      case "password": {
        return Yup.string()
          .min(validation.min, validation.minPasswordLenMessage)
          .required(validation.requiredMessage);
      }
      case "confirmpassword": {
        return Yup.string()
          .oneOf(
            [Yup.ref(validation.secondField), null],
            "The passwords don't match."
          )
          .required(validation.requiredMessage);
      }
      default: {
        return;
      }
    }
  };

  render() {
    const { formSpecs, submit, afterForm, beforeForm } = this.props;
    const { initialValues, validationSchema } = this.state;
    let form = null;

    if (initialValues) {
      form = (
        <>
          <div className="container">
            <div className="title">
              {formSpecs.title}&nbsp;
              <br />
              {beforeForm ? (
                <div className="beforeForm">{beforeForm}</div>
              ) : null}
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions, error) => {
                actions.validateForm(values).then(() => {
                  submit(values);
                });
              }}
              validationSchema={validationSchema}
            >
              {(formProps) => (
                <form onSubmit={formProps.handleSubmit} className="form">
                  <FieldFactory
                    inputFields={formSpecs.inputFields}
                    formProps={formProps}
                  />
                  <div className="buttonset">
                    <ButtonFactory
                      main={this}
                      buttonSpecs={formSpecs.buttons}
                      resetForm={formProps.resetForm}
                    />
                  </div>
                  {afterForm && afterForm}
                </form>
              )}
            </Formik>
          </div>
        </>
      );
    } else {
      form = <></>;
    }
    return <>{form}</>;
  }
}
export default FormFactory;
