import React, { useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
import { MainContext } from "../../../contexts";
// import * as actions from "../../store/actions/authenticationActions/index";
import Form from "../../FormFactory/FormFactory";
import { path } from "../../../constants";
import { formSpecification } from "./formSpecification";

const CompanyDetails = (props) => {
  let history = useHistory();
  const { lock, handleSteps } = useContext(MainContext);
  const resetAll = useCallback(() => {
    lock(path.OTP, true);
    handleSteps(1);
  }, [lock, handleSteps]);
  useEffect(() => {
    resetAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const submit = (credentials) => {
    lock(path.OTP, false);
    localStorage.setItem("imgUpload", credentials.imgUpload);
    localStorage.setItem("companyname", credentials.companyname);
    localStorage.setItem("emailid", credentials.emailid);
    localStorage.setItem("jobtitle", credentials.jobtitle);
    localStorage.setItem("experience", credentials.experience);
    localStorage.setItem("conditionsaccepted", credentials.conditionsaccepted);
    stepToOTP();
  };
  const stepToOTP = () => {
    handleSteps(2);
    history.push("/otp");
  };
  const goBack = () => {
    history.push("/");
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
        secondButton={goBack}
        beforeForm={beforeForm}
      />
    </>
  );
  return <>{content}</>;
};
export default CompanyDetails;
