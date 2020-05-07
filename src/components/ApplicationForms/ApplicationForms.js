import React, { useState } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import OTP from "./OTP/OTP";
import ResultPage from "../../components/ResultPage/ResultPage";
import { MainContext } from "../../contexts";
import { path } from "../../constants";

const ApplicationForms = (props) => {
  const { handleSteps } = props;
  const [lockCompanyDetails, setLockCompanyDetails] = useState(true);
  const [lockOTP, setLockOTP] = useState(true);
  const lock = (pathString, value) => {
    switch (pathString) {
      case path.COMPANY_DETAILS: {
        setLockCompanyDetails(value);
        break;
      }
      case path.OTP: {
        setLockOTP(value);
        break;
      }
      default: {
        break;
      }
    }
  };
  const mainContextObj = {
    handleSteps,
    lock,
  };
  return (
    <>
      <MainContext.Provider value={mainContextObj}>
        <Switch>
          <Route exact path="/">
            <PersonalDetails />
          </Route>

          {!lockCompanyDetails ? (
            <Route path="/companyDetails">
              <CompanyDetails />
            </Route>
          ) : null}
          {!lockOTP ? (
            <Route path="/otp">
              <OTP />
            </Route>
          ) : null}
          <Route path="/resultPage">
            <ResultPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </MainContext.Provider>
    </>
  );
};

export default withRouter(ApplicationForms);
