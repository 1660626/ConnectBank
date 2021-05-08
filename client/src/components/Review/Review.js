import "./Review.css";
import axios from "axios";
import React, {  useContext } from "react";
import { Grid } from "@material-ui/core";
import { AppContext } from "../../utils/AppContext";

const Review = () => {
  let { formStep1, formStep2 } = useContext(AppContext);
  console.log(formStep1);
  console.log(formStep2);
  const API_URL = `http://127.0.0.1:4000/api/users`;
  const addUser = () => {
    axios.post(API_URL, { ...formStep1, ...formStep2 }).then(
      (response) => { console.log(response)},
      (error) => {console.log(error)}
    );
  };
  return (
    <div>
      <div className="content-head">
        <p className="text-content-head">Review</p>
        <p className="text-desc">
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
      </div>
      <div className="content-body">
        <div className="block">
          <p className="title-review">Personal Information</p>

          <div>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <p>First Name</p>
                <p className="value-review"> {formStep1.firstname}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Last Name</p>
                <p className="value-review"> {formStep1.lastname}</p>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <p>Your Email</p>
                <p className="value-review"> {formStep1.email}</p>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <p>Phone Number</p>
                <p className="value-review"> {formStep1.phone}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Birth Date:</p>
                <p className="value-review"> {formStep1.dob}</p>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="block">
          <p className="title-review">Connect Bank Account</p>

          <Grid container spacing={6}>
            <Grid item xs={6}>
              <p>Select Bank</p>
              <p className="value-review">{formStep2.bank}</p>
            </Grid>
            <Grid item xs={6}>
              <p>Number Card</p>
              <p className="value-review"> {formStep2.card}</p>
            </Grid>
          </Grid>
        </div>
        <div className="block">
          <div className="plan">
            <p className="title-review"> Set Financial Goals</p>
            <p className="medium-plan">Medium Plan</p>
            <p>
              Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc
              congue nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="btnNext">
        <div className="circle-next" onClick={addUser}>
          OK
        </div>
      </div>
    </div>
  );
};

export default Review;
