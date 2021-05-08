import React, { useContext } from "react";

import { AppContext } from "../../utils/AppContext";

const Next = ({valueForm}) => {
  console.log(valueForm)
  let { chooseStep, setchooseStep } = useContext(AppContext);

  const jumpStep = () => {
   console.log(chooseStep)
   switch (chooseStep[4]) {
    case "1":
      setchooseStep("step2");
      break;
    case "2":
      setchooseStep("step3");
      break;
    case "3":
      setchooseStep("step4");
      break;
    
    default:
      break;
  }
  };
  return (
    <div className="btnNext">
      <div className="circle-next" onClick={jumpStep}>
        NEXT
      </div>
    </div>
  );
};

export default Next;
