import React, { useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../../store/actions/authenticationActions/index";
import { MainContext } from "../../../contexts";
import { path } from "../../../constants";
import Form from "../../FormFactory/FormFactory";
import { formSpecification } from "./formSpecification";

const PersonalDetails = (props) => {
  const history = useHistory();
  const { lock, handleSteps } = useContext(MainContext);
  useEffect(() => {
    resetAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const resetAll = useCallback(() => {
    lock(path.PERSONAL_DETAILS, false);
    lock(path.COMPANY_DETAILS, true);
    lock(path.OTP, true);
    handleSteps(0);
    localStorage.clear();
  }, [lock, handleSteps]);
  const submit = (credentials) => {
    lock(path.COMPANY_DETAILS, false);
    localStorage.setItem("fullname", credentials.fullname);
    localStorage.setItem("gender", credentials.gender);
    localStorage.setItem("country", credentials.country);
    localStorage.setItem("state", credentials.state);
    localStorage.setItem("phone", credentials.phone);
    stepToCompanyDetails();
  };
  const stepToCompanyDetails = () => {
    handleSteps(1);
    history.push("/companyDetails");
  };
  let beforeForm = (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
    </>
  );
  let content = (
    <>
      <Form
        formSpecs={formSpecification}
        submit={submit}
        beforeForm={beforeForm}
      />
    </>
  );

  return <>{content}</>;
};
export default PersonalDetails;
