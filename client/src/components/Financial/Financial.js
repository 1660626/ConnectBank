import "./Financial.css";
import React, { useContext } from "react";

import Spec from "../../image/cbimage.png";
import Medi from "../../image/cbimage2.png";
import { AppContext } from "../../utils/AppContext";

const Financial = () => {
  let { setchooseStep } = useContext(AppContext);

  return (
    <div>
      <div className="content-head">
        <p className="text-content-head">Set Financial Goals</p>
        <p className="text-desc">
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
      </div>
      <div className="content-body">
        <div className="plan">
          <div className="left">
            <div className="circle-plan">
              <img className="img" src={Spec} alt="" />
            </div>
          </div>
          <div className="right">
            <p className="title">Specific Plan</p>
            <p>
              Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc
              congue nisi.
            </p>
          </div>
        </div>
        <div className="plan">
          <div className="left">
            <div className="circle-plan">
              <img className="img" src={Spec} alt="" />
            </div>
          </div>
          <div className="right">
            <p className="title">Medium Plan</p>
            <p>
              Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc
              congue nisi.
            </p>
          </div>
        </div>
        <div className="plan">
          <div className="left">
            <div className="circle-plan circle-plan-active ">
              <img className="img" src={Medi} alt="" />
            </div>
          </div>
          <div className="right">
            <p className="title">Medium Plan</p>
            <p>
              Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc
              congue nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="btnNext">
        <div
          className="circle-next"
          onClick={() => {
           
            setchooseStep("step4");
          }}
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default Financial;
