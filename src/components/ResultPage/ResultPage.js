import React, { useEffect, useContext } from "react";
import {useHistory} from 'react-router-dom';
import { Button } from "reactstrap";
import { MainContext } from "../../contexts";
import { path } from "../../constants";
import Background from "../UI/Background/Background";
import "./ResultPage.scss";

const ResultPage = (props) => {
  const history = useHistory();
  const { lock } = useContext(MainContext);
  const resetAll = () => {
    lock(path.COMPANY_DETAILS, true);
  };
  useEffect(() => {
    resetAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const goBackHome = () => {
    history.push("/");
  };
  return (
    <div className="message-body">
      <Background />
      <h2 className="title">Congratulations!</h2>
      <h4 className="message">Your registration was successful. </h4>
      <Button color="link" size="lg" onClick={goBackHome}>
        Back to main menu
      </Button>
    </div>
  );
};
export default ResultPage;
