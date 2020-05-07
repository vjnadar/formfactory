import React, { useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../FormFactory/FormFactory";
import { MainContext } from "../../../contexts";
import { path } from "../../../constants";
import { formSpecification } from "./formSpecification";

const OTP = (props) => {
  let history = useHistory();
  const { lock, handleSteps } = useContext(MainContext);
  const resetAll = useCallback(() => {
    handleSteps(2);
  }, [handleSteps]);
  useEffect(() => {
    let _mounted = true;
    resetAll();
    return () => {
      if (_mounted) {
        _mounted = false;
        lock(path.OTP, true);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const submit = (credentials) => {
    localStorage.setItem("txtboxA", credentials.txtboxA);
    localStorage.setItem("txtboxB", credentials.txtboxB);
    localStorage.setItem("txtboxC", credentials.txtboxC);
    localStorage.setItem("txtboxD", credentials.txtboxD);
    stepToResult();
  };
  const stepToResult = () => {
    handleSteps(3);
    history.push("/resultPage");
  };
  const goBack = () => {
    history.push("/companyDetails");
  };

  let beforeForm = (
    <>
      <p>
        For your security, we need to verify your identity. We sent a 5-digit
        code to name@domain.com. Please enter it below. industry.{" "}
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
export default OTP;
