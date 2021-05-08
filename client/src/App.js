import "./App.css";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppContext } from "./utils/AppContext";
import { Container, Grid } from "@material-ui/core";

import Persional from "./components/Personal/Persional";
import Connect from "./components/ConnectBank/Connect";
import Financial from "./components/Financial/Financial";
import Review from "./components/Review/Review";

const App = () => {
  const [chooseStep, setchooseStep] = useState("step1");
  const [formStep1, setFormStep1] = useState({});
  const [formStep2, setFormStep2] = useState("step1");

  const [flag, setflag] = useState([true, false, false, false]);

  useEffect(() => {
    switch (chooseStep) {
      case "step1":
        setflag([true, false, false, false]);
        break;
      case "step2":
        setflag([true, true, false, false]);
        break;
      case "step3":
        setflag([true, true, true, false]);
        break;
      case "step4":
        setflag([true, true, true, true]);
        break;
      default:
        break;
    }
  }, [chooseStep]);

  return (
    <AppContext.Provider
      value={{
        chooseStep,
        setchooseStep,
        formStep1,
        setFormStep1,
        formStep2,
        setFormStep2,
      }}
    >
      <div className="app">
        <Router>
          <Container className="App-header" maxWidth="md">
            <Grid container>
              <Grid item xs={4} className="bar">
                <Link
                  to="/step1"
                  className="step"
                  onClick={() => setchooseStep("step1")}
                >
                  <div
                    className={
                      flag[0] === true ? `circle circle-active ` : `circle `
                    }
                  >
                    01
                  </div>
                  <p
                    className={
                      flag[0] === true
                        ? `text-bar text-bar-active `
                        : `text-bar `
                    }
                  >
                    Personal Information
                  </p>
                </Link>
                <Link
                  to="/step2"
                  className="step"
                  onClick={() => setchooseStep("step2")}
                >
                  <div
                    className={
                      flag[1] === true ? `circle circle-active ` : `circle `
                    }
                  >
                    02
                  </div>
                  <p
                    className={
                      flag[1] === true
                        ? `text-bar text-bar-active `
                        : `text-bar `
                    }
                  >
                    Connect Bank Account
                  </p>
                </Link>
                <Link
                  to="/step3"
                  className="step"
                  onClick={() => setchooseStep("step3")}
                >
                  <div
                    className={
                      flag[2] === true ? `circle circle-active ` : `circle `
                    }
                  >
                    03
                  </div>
                  <p
                    className={
                      flag[2] === true
                        ? `text-bar text-bar-active `
                        : `text-bar `
                    }
                  >
                    Set Financial Goals
                  </p>
                </Link>
                <Link
                  to="/step4"
                  className="step"
                  onClick={() => setchooseStep("step4")}
                >
                  <div
                    className={
                      flag[3] === true ? `circle circle-active ` : `circle `
                    }
                  >
                    04
                  </div>
                  <p
                    className={
                      flag[3] === true
                        ? `text-bar text-bar-active `
                        : `text-bar `
                    }
                  >
                    Review
                  </p>
                </Link>
              </Grid>
              <Grid item xs={8} className="content">
                {chooseStep === "step1" && <Persional />}
                {chooseStep === "step2" && <Connect />}
                {chooseStep === "step3" && <Financial />}
                {chooseStep === "step4" && <Review />}
              </Grid>
            </Grid>
          </Container>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export default App;
