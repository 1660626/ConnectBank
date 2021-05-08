import React, { useState,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {TextField,Select,FormControl,MenuItem,InputLabel} from "@material-ui/core";
// import Next from "../Next/Next";
import { AppContext } from "../../utils/AppContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Connect = () => {
  const classes = useStyles();
  let { setchooseStep, setFormStep2 } = useContext(AppContext);

  const [bank, setBank] = useState("");
  const [numberCard, setNumberCard] = React.useState("1234 1234 1234 1234");

  return (
    <div>
      <div className="content-head">
        <p className="text-content-head">Connect Bank Account</p>
        <p className="text-desc">
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
      </div>
      <div className="content-body">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          >
            <MenuItem value={"OCBC Bank"}>OCBC Bank</MenuItem>
            <MenuItem value={"OCBC Bank"}>OCBC Bank</MenuItem>
            <MenuItem value={"OCBC Bank"}>OCBC Bank</MenuItem>
          </Select>
          
          <div className="mt-5">
            <TextField
              id="standard-multiline-flexible"
              label="Number Card"
              multiline
              rowsMax={4}
              value={numberCard}
              onChange={(e) => setNumberCard(e.target.value)}
            />
          </div>
        </FormControl>
      </div>
      <div className="btnNext">
        <div
          className="circle-next"
          onClick={() => {
            setFormStep2({
              bank: bank,
              card: numberCard,
            
            });
            setchooseStep("step3");
          }}
        >
          NEXT
        </div>
      </div>

    </div>
  );
};

export default Connect;
