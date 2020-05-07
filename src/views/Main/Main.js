import React from "react";
import { getSteps, useStyles } from "./methods";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ApplicationForms } from "../../components/ApplicationForms";
import "./Main.scss";

const HorizontalLinearStepper=()=> {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleSteps = (stepNumber) => {
    setActiveStep(stepNumber);
  };
  return (
    <>
      <div className={classes.root}>
        <div className="MuiPaper-root MuiStepLabel-label">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>
      <ApplicationForms handleSteps={handleSteps} />
    </>
  );
}
export default HorizontalLinearStepper;
