import React, { Component } from "react";
import "./ButtonFactory.scss";

class ButtonFactory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormSpecValid: false,
    };
    this.resetFormHandler = this.resetFormHandler.bind(this);
  }

  componentDidMount() {
    const { buttonSpecs } = this.props;
    if (buttonSpecs.buttonSet) {
      this.setState({ isFormSpecValid: true });
    }
    if (buttonSpecs.buttonSet && buttonSpecs.button) {
      this.setState({ isFormSpecValid: false });
    }

    if (buttonSpecs.button) {
      this.setState({ isFormSpecValid: true });
    }
  }
  resetFormHandler() {
    const { resetForm } = this.props;
    resetForm();
  }
  render() {
    let button = null;
    const { buttonSpecs } = this.props;
    const secondButton =
      this.props.main.props.secondButton || this.resetFormHandler;
    switch (buttonSpecs.buttonSet.setType) {
      case "default": {
        button = (
          <>
            <button className="submit-button" type="submit">
              {buttonSpecs.buttonSet.buttonNames.OK}
            </button>
            <button className="button" type="button" onClick={secondButton}>
              {buttonSpecs.buttonSet.buttonNames.Cancel}
            </button>
          </>
        );
        break;
      }
      case "defaultReverse": {
        button = (
          <>
            <button className="button" type="button" onClick={secondButton}>
              {buttonSpecs.buttonSet.buttonNames.Cancel}
            </button>
            <button className="submit-button" type="submit">
              {buttonSpecs.buttonSet.buttonNames.OK}
            </button>
          </>
        );
        break;
      }
      default: {
        button = <></>;
        console.log("Invalid form");
        break;
      }
    }
    return <>{button}</>;
  }
}

export default ButtonFactory;
