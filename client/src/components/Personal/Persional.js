import React, { useState, useContext } from "react";
import { TextField, FormControl, Grid } from "@material-ui/core";
import { AppContext } from "../../utils/AppContext";

const Persional = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [DD, setDD] = useState("");
  const [MM, setMM] = useState("");
  const [YYYY, setYYYY] = useState("");
  // function handleSubmit() {
  //   console.log(firstName);
  // }
  let { setchooseStep, setFormStep1 } = useContext(AppContext);

  return (
    <div>
      <div className="content-head">
        <p className="text-content-head">Personal Informationw</p>
        <p className="text-desc">
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
      </div>
      <div className="content-body">
        <FormControl>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <p>First Name</p>

              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <p>Last Name</p>
              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <p>Your Email:</p>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <p>Phone Number</p>
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <p>Birth Date:</p>
              <Grid container spacing={6}>
                <Grid item xs={3}>
                  <div>
                    <TextField
                      value={DD}
                      onChange={(e) => setDD(e.target.value)}
                      placeholder="DD"
                      fullWidth
                    />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <TextField
                      value={MM}
                      onChange={(e) => setMM(e.target.value)}
                      placeholder="MM"
                      fullWidth
                    />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <TextField
                      value={YYYY}
                      onChange={(e) => setYYYY(e.target.value)}
                      placeholder="YYYY"
                      fullWidth
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </div>

      <div className="btnNext">
        <div
          className="circle-next"
          onClick={() => {
            setFormStep1({
              firstname: firstName,
              lastname: lastName,
              email: email,
              phone: phone,
              dob: `${YYYY}/${MM}/${DD}`,
            });
            setchooseStep("step2");
          }}
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default Persional;
